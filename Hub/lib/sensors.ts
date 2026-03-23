/**
 * ESPHome Sensor Library
 * 
 * Database of available sensors for YAML builder
 * Organized by category for easy picker UI
 */

export const BOARDS = [
  { id: 'esp32', label: 'ESP32', description: 'Most popular, great for prototypes' },
  { id: 'esp8266', label: 'ESP8266', description: 'Budget option, WiFi enabled' },
  { id: 'pico_w', label: 'Raspberry Pi Pico W', description: 'New, WiFi + great performance' },
  { id: 'arduino', label: 'Arduino', description: 'Classic, wide compatibility' },
]

export const SENSORS = {
  temperature: [
    { id: 'dht22', label: 'DHT22', ports: ['GPIO4'] },
    { id: 'ds18b20', label: 'DS18B20', ports: ['GPIO4'] },
    { id: 'bmp280', label: 'BMP280', ports: ['I2C'] },
  ],
  motion: [
    { id: 'pir', label: 'PIR Motion', ports: ['GPIO5'] },
    { id: 'mmwave', label: 'mmWave Radar', ports: ['I2C', 'Serial'] },
  ],
  light: [
    { id: 'ldr', label: 'Light Sensor (LDR)', ports: ['ADC'] },
    { id: 'tsl2561', label: 'TSL2561', ports: ['I2C'] },
  ],
  soil: [
    { id: 'soil_moisture', label: 'Soil Moisture', ports: ['ADC'] },
    { id: 'soil_ph', label: 'Soil pH', ports: ['ADC'] },
  ],
  output: [
    { id: 'relay', label: 'Relay Module', ports: ['GPIO'] },
    { id: 'led', label: 'LED', ports: ['GPIO'] },
    { id: 'buzzer', label: 'Buzzer', ports: ['GPIO'] },
  ],
  display: [
    { id: 'oled', label: 'OLED Display', ports: ['I2C'] },
    { id: 'lcd', label: 'LCD Display', ports: ['I2C', 'Parallel'] },
  ],
  input: [
    { id: 'button', label: 'Button', ports: ['GPIO'] },
    { id: 'switch', label: 'Switch', ports: ['GPIO'] },
    { id: 'potentiometer', label: 'Potentiometer', ports: ['ADC'] },
  ],
}

export const TEMPLATES = [
  {
    id: 'temp-humidity',
    name: 'Hallway Temperature & Humidity',
    description: 'DHT22 sensor to monitor room conditions',
    sensors: ['dht22'],
    yaml: `esphome:
  name: hallway-temp-sensor

esp32:
  board: esp32-devkitc-v4

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

sensor:
  - platform: dht
    pin: GPIO4
    temperature:
      name: "Hallway Temperature"
    humidity:
      name: "Hallway Humidity"
    update_interval: 60s

api:
homeassistant:
`,
  },
  {
    id: 'plant-monitor',
    name: 'Plant Moisture Monitor',
    description: 'Soil moisture + temperature sensor for plant care',
    sensors: ['soil_moisture', 'dht22'],
    yaml: `esphome:
  name: plant-monitor

esp32:
  board: esp32-devkitc-v4

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

sensor:
  - platform: adc
    pin: GPIO35
    name: "Soil Moisture"
    update_interval: 60s
  - platform: dht
    pin: GPIO4
    temperature:
      name: "Plant Temperature"

api:
homeassistant:
`,
  },
  {
    id: 'motion-light',
    name: 'Motion + Light Sensor',
    description: 'Detect motion and ambient light for automation',
    sensors: ['pir', 'ldr'],
    yaml: `esphome:
  name: motion-light-sensor

esp32:
  board: esp32-devkitc-v4

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

binary_sensor:
  - platform: gpio
    pin: GPIO5
    name: "Motion"

sensor:
  - platform: adc
    pin: GPIO32
    name: "Light Level"

api:
homeassistant:
`,
  },
]
