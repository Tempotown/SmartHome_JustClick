'use client'

/**
 * YAML Builder Component
 * 
 * Interactive interface for building ESPHome and Home Assistant YAML configs
 * Status: Placeholder (Phase C)
 * 
 * Features to implement:
 * - Board selector (ESP32, ESP8266, Pico W, Arduino)
 * - Sensor picker (DHT22, DS18B20, motion, soil, relay, LED, etc.)
 * - Pin assignment visualization
 * - Real-time YAML preview
 * - Download & copy functionality
 * - Template gallery
 */

export default function YamlBuilder() {
  return (
    <section id="builder" className="py-20 bg-gray-50 dark:bg-ha-surface-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-ha p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">YAML Builder</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Interactive interface to build ESPHome and Home Assistant configurations
          </p>
          <div className="bg-gray-100 dark:bg-ha-surface-dark rounded-lg p-8 h-96 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-500 dark:text-gray-600 mb-2">🚀 Coming Soon</p>
              <p className="text-sm text-gray-500">Full interactive builder with live preview</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
