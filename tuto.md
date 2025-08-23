# 🕌 Automate Adhan with Home Assistant on Raspberry Pi: A Step-by-Step Guide

Transform your home into a smart mosque by automating the Adhan (Islamic call to prayer) using Home Assistant on a Raspberry Pi. This guide will walk you through installing Home Assistant, integrating the Mawaqit component for accurate prayer times, and setting up automations to play the Adhan on Google Chromecast, Amazon Alexa, or a Bluetooth speaker.

---

## 🧰 Requirements

### Hardware

- Raspberry Pi 3B+ or 4 (2GB RAM or more recommended)
- 32GB or larger microSD card (Class 10)
- Raspberry Pi power supply
- Internet connection (Ethernet or Wi-Fi)
- Audio output device: Google Chromecast, Amazon Alexa, or Bluetooth speaker

### Software

- [Home Assistant OS](https://www.home-assistant.io/installation/raspberrypi)
- Mawaqit account ([mawaqit.net](https://mawaqit.net))
- Optional: [HACS](https://hacs.xyz/) for custom integrations

---

## 🧱 Step 1: Install Home Assistant on Raspberry Pi

1. **Download Home Assistant OS Image**  
   Visit the [Home Assistant installation page](https://www.home-assistant.io/installation/raspberrypi) and download the appropriate image for your Raspberry Pi model.

2. **Flash the Image to microSD Card**  
   Use [Raspberry Pi Imager](https://www.raspberrypi.com/software/) or [Balena Etcher](https://www.balena.io/etcher/) to flash the downloaded image to your microSD card.

3. **Insert microSD Card and Power On**  
   Insert the microSD card into your Raspberry Pi, connect it to your network, and power it on.

4. **Access Home Assistant**  
   After a few minutes, access Home Assistant by navigating to `http://homeassistant.local:8123` or `http://<your-pi-ip>:8123` in your web browser.

5. **Complete Initial Setup**  
   Follow the on-screen instructions to create your user account and configure basic settings.

---

## 📦 Step 2: Integrate Mawaqit Component

1. **Install HACS (Home Assistant Community Store)**  
   Follow the [official HACS installation guide](https://hacs.xyz/docs/setup/download) to add HACS to your Home Assistant instance.

2. **Add Mawaqit Integration**  
   Once HACS is installed:

   - Navigate to **HACS > Integrations**.
   - Click on the "+" button and search for "Mawaqit".
   - Select the Mawaqit integration and click "Install". [oai_citation_attribution:0‡Home Assistant Community](https://community.home-assistant.io/t/automate-islamic-adhan-also-called-azan-or-azzan-or-other-prayer-calls-updated-3-24-2023-for-node-red/100909?page=17&utm_source=chatgpt.com)

3. **Configure Mawaqit**  
   After installation:

   - Navigate to **Settings > Devices & Services**.
   - Click on "Add Integration" and select "Mawaqit".
   - Enter your mosque's slug (found on [mawaqit.net](https://mawaqit.net)) to fetch accurate prayer times. [oai_citation_attribution:1‡Home Assistant Community](https://community.home-assistant.io/t/adhan-automation-using-google-speaker/135622?page=21&utm_source=chatgpt.com)

4. **Verify Sensors**  
   After configuration, Home Assistant will create sensors for each prayer time (e.g., `sensor.mawaqit_fajr`, `sensor.mawaqit_dhuhr`, etc.).

---

## 🔊 Step 3: Automate Adhan Playback

### Option A: Google Chromecast

1. **Ensure Chromecast is Detected**  
   Home Assistant should automatically detect Chromecast devices on your network. Verify under **Settings > Devices & Services**.

2. **Upload Adhan Audio File**  
   Place your Adhan MP3 file in the `/media` directory of Home Assistant.

3. **Create Automation**  
   Navigate to **Settings > Automations & Scenes** and create a new automation:

   ```yaml
   alias: Play Adhan on Fajr
   trigger:
     - platform: time
       at: '{{ states("sensor.mawaqit_fajr") }}'
   action:
     - service: media_player.play_media
       target:
         entity_id: media_player.your_chromecast_device
       data:
         media_content_id: media-source://media_source/local/adhan.mp3
         media_content_type: audio/mp3
   ```

   Replace `media_player.your_chromecast_device` with your actual Chromecast entity ID.

### Option B: Amazon Alexa

1. **Install Alexa Media Player Integration**  
   Use HACS to install the [Alexa Media Player](https://github.com/custom-components/alexa_media_player) integration.

2. **Configure Alexa Integration**  
   After installation, configure the integration by providing your Amazon account credentials.

3. **Create Automation**  
   Create a new automation to play the Adhan:

   ```yaml
   alias: Play Adhan on Dhuhr
   trigger:
     - platform: time
       at: '{{ states("sensor.mawaqit_dhuhr") }}'
   action:
     - service: media_player.play_media
       target:
         entity_id: media_player.your_alexa_device
       data:
         media_content_id: media-source://media_source/local/adhan.mp3
         media_content_type: audio/mp3
   ```

   Ensure `media_player.your_alexa_device` matches your Alexa device's entity ID.

### Option C: Bluetooth Speaker

Playing the Adhan through a Bluetooth speaker connected to your Raspberry Pi running Home Assistant is a bit more involved, but totally doable. Here's how:

#### 1. Pair the Bluetooth Speaker

SSH into your Home Assistant host (you may need to enable SSH access first):

```bash
login  # to access the OS shell
bluetoothctl
```

Inside `bluetoothctl`:

```bash
power on
agent on
default-agent
scan on  # wait and find your speaker MAC
pair XX:XX:XX:XX:XX:XX
trust XX:XX:XX:XX:XX:XX
connect XX:XX:XX:XX:XX:XX
exit
```

> Replace `XX:XX:XX...` with your Bluetooth speaker's MAC address.

#### 2. Set the Bluetooth Speaker as Default Audio Output

Run:

```bash
pactl list short sinks
```

Copy the sink name for your Bluetooth speaker, then set it as default:

```bash
pactl set-default-sink <your-bluetooth-sink-name>
```

#### 3. Use a Shell Command in Home Assistant

In your `configuration.yaml`, add:

```yaml
shell_command:
  play_adhan_bt: "cvlc /media/adhan.mp3"
```

> This uses VLC to play the audio file (make sure VLC is installed on your host).

#### 4. Create the Automation

```yaml
alias: Play Adhan on Maghrib (Bluetooth)
trigger:
  - platform: time
    at: '{{ states("sensor.mawaqit_maghrib") }}'
action:
  - service: shell_command.play_adhan_bt
```
