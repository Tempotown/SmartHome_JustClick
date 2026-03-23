'use client'

import { useState, useEffect } from 'react'
import { Zap, Cpu, Users, ArrowRight, Copy, Check, Sparkles } from 'lucide-react'

export default function Home() {
  const [copied, setCopied] = useState(false)
  const [githubStats, setGithubStats] = useState({ stars: 0, forks: 0 })

  useEffect(() => {
    // Simulate GitHub stats fetch
    setGithubStats({ stars: 245, forks: 42 })
  }, [])

  const copyCommand = () => {
    navigator.clipboard.writeText('docker-compose up')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      {/* === HERO SECTION === */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ha-primary/5 via-white to-esp-primary/5 dark:from-ha-primary/10 dark:via-ha-surface-dark dark:to-esp-primary/10 pt-20 pb-32">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-grid-pattern dark:opacity-5 opacity-10" style={{ backgroundSize: '30px 30px' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ha-primary/10 border border-ha-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-ha-primary" />
              <span className="text-sm font-medium text-ha-primary">
                ✨ Local-First Smart Home Platform
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Your Smart Home,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-ha">
                Your Rules
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Control existing devices (Nest, Ring, Hue) + build custom prototypes (ESP32, Raspberry Pi).
              All automations run locally. Forever offline-first.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://github.com/codespaces/new?repo=pilloverx%2FSmartHome_JustClick"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ha inline-flex items-center justify-center gap-2 group"
              >
                <Zap className="w-5 h-5" />
                Open in Codespaces (Free)
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button className="btn-ha-outline inline-flex items-center justify-center gap-2 group">
                <Cpu className="w-5 h-5" />
                Try Builder Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* GitHub Stats */}
            <div className="inline-flex gap-6 p-4 rounded-lg bg-white dark:bg-ha-surface-dark border border-ha-border dark:border-ha-border-dark">
              <div className="text-center">
                <div className="text-2xl font-bold text-ha-primary">{githubStats.stars}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Stars</div>
              </div>
              <div className="w-px bg-ha-border dark:bg-ha-border-dark" />
              <div className="text-center">
                <div className="text-2xl font-bold text-esp-primary">{githubStats.forks}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Forks</div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Side Illustration Placeholder */}
        <div className="mt-16 max-w-5xl mx-auto px-4">
          <div className="card-ha p-8 h-64 flex items-center justify-center">
            <div className="text-center text-gray-400 dark:text-gray-600">
              <Cpu className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">Interactive Demo Area</p>
              <p className="text-sm">Live chat simulator coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* === QUICK START SECTION === */}
      <section className="py-20 bg-white dark:bg-ha-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Started in <span className="text-ha-primary">5 Minutes</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Three simple steps to automate your home
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                step: 1,
                title: 'Start the Stack',
                description: 'Run docker-compose up to launch Home Assistant and ESPHome',
                icon: Zap,
              },
              {
                step: 2,
                title: 'Add Your Devices',
                description: 'Connect existing devices (Nest, Ring, Hue) via integrations',
                icon: Users,
              },
              {
                step: 3,
                title: 'Build Automations',
                description: 'Create rules and automations with YAML or visual builder',
                icon: Cpu,
              },
            ].map(({ step, title, description }) => (
              <div key={step} className="card-ha p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-gradient-ha flex items-center justify-center text-white font-bold text-lg mb-4">
                  {step}
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{description}</p>
              </div>
            ))}
          </div>

          {/* Code Block */}
          <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-400 text-sm font-mono">$ bash</span>
              <button
                onClick={copyCommand}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <code className="text-green-400 font-mono text-lg">
              $ docker-compose up
            </code>
          </div>
        </div>
      </section>

      {/* === FEATURES SECTION === */}
      <section id="builder" className="py-20 bg-gray-50 dark:bg-ha-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Everything you need to automate your smart home
          </p>

          {/* Feature Placeholders */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: '🛠️ YAML Builder',
                description: 'Visual interface to build ESPHome and Home Assistant configs',
                placeholder: 'Interactive YAML Builder - Coming Soon',
              },
              {
                title: '🎨 Prototype Gallery',
                description: 'Browse, customize, and share smart home device prototypes',
                placeholder: 'Community Prototypes Gallery - Coming Soon',
              },
              {
                title: '🤖 Skill Generator',
                description: 'Create OpenClaw AI skills and publish to ClawHub registry',
                placeholder: 'OpenClaw Skill Generator - Coming Soon',
              },
              {
                title: '⚙️ Setup Wizard',
                description: 'Guided onboarding with live previews and simulations',
                placeholder: 'Interactive Setup Wizard - Coming Soon',
              },
            ].map((feature, idx) => (
              <div key={idx} className="card-ha p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{feature.description}</p>
                <div className="bg-gray-100 dark:bg-ha-surface-dark rounded p-8 text-center text-gray-500 dark:text-gray-600 h-32 flex items-center justify-center border-2 border-dashed border-ha-border dark:border-ha-border-dark">
                  {feature.placeholder}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === GALLERY SECTION === */}
      <section id="gallery" className="py-20 bg-white dark:bg-ha-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Featured Prototypes
          </h2>

          {/* Gallery Grid Placeholder */}
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div key={idx} className="card-ha overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-32 bg-gradient-esp/20 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <Cpu className="w-12 h-12 mx-auto opacity-30 mb-2" />
                    <p className="text-sm">Prototype Demo {idx}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold mb-2">Prototype Title {idx}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Description of this smart home prototype
                  </p>
                  <button className="text-ha-primary hover:text-ha-primary-dark text-sm font-medium">
                    Steal & Customize →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === DOCUMENTATION SECTION === */}
      <section id="docs" className="py-20 bg-gray-50 dark:bg-ha-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Documentation & Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quick Start',
                description: 'Get up and running in 5 minutes with step-by-step guides',
                link: '#',
              },
              {
                title: 'Device Setup',
                description: 'Integration guides for 400+ supported smart devices',
                link: '#',
              },
              {
                title: 'API Reference',
                description: 'Complete documentation for Home Assistant and ESPHome',
                link: '#',
              },
            ].map((doc, idx) => (
              <a
                key={idx}
                href={doc.link}
                className="card-ha p-8 hover:shadow-lg transition-shadow group"
              >
                <h3 className="text-lg font-bold mb-2 group-hover:text-ha-primary transition-colors">
                  {doc.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {doc.description}
                </p>
                <ArrowRight className="w-4 h-4 text-ha-primary mt-4 group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA SECTION === */}
      <section className="py-20 bg-gradient-ha">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Automate?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of smart home enthusiasts building the future of automation
          </p>
          <a
            href="https://github.com/codespaces/new?repo=pilloverx%2FSmartHome_JustClick"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white dark:bg-ha-surface-dark dark:text-white text-ha-primary font-bold hover:bg-gray-100 dark:hover:bg-ha-surface-dark/90 transition-colors group"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </>
  )
}
