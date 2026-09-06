export const profileData = {
  name: "Rahul Kumar",
  headline: "Engineering Manager | Board-Ready Independent Director",
  subHeadline: "Technical Governance, R&D Oversight & Product Risk Management for Manufacturing & IoT Companies",
  summary: "Engineering leader with 13+ years of experience building safety-critical products, scaling manufacturing teams from scratch, and driving regulatory compliance across embedded systems, IoT, and semiconductor domains. Specializing in governance for technology-driven companies transitioning from traditional operations to data-driven decision making.",
  email: "er.rahul@outlook.com",
  linkedin: "https://www.linkedin.com/in/engineerrahulkumar",
  location: "New Delhi, India",
  
  competencies: [
    {
      title: "Technical Governance",
      description: "Bridging the gap between the boardroom and the factory floor with deep technical oversight.",
      icon: "ShieldCheck"
    },
    {
      title: "R&D Oversight",
      description: "Strategic management of product lifecycles from inception to market-ready certification.",
      icon: "Cpu"
    },
    {
      title: "Product Risk Management",
      description: "Expertise in DFMEA, MTBF, and stress analysis to mitigate fiduciary risks at the board level.",
      icon: "AlertTriangle"
    },
    {
      title: "Regulatory Compliance",
      description: "Ensuring 100% adherence to IEC, BIS, and EMI/EMC standards for global market entry.",
      icon: "FileCheck"
    },
    {
      title: "AI & Industry 4.0",
      description: "Driving organizational adoption of generative AI and IoT to achieve operational ROI.",
      icon: "Zap"
    },
    {
      title: "Crisis Resolution",
      description: "Proven track record of resolving critical technical failures affecting millions of devices.",
      icon: "Activity"
    }
  ],

  experience: [
    {
      company: "STMicroelectronics",
      role: "Staff Software Engineer",
      period: "May 2023 - Present",
      highlights: [
        "Architected device drivers for multiple product lines, impacting reliability and time-to-market.",
        "Pioneered AI tool adoption, achieving 50% productivity improvement in development workflows.",
        "Serving as the team's 'AI Generalist' for code generation and documentation."
      ]
    },
    {
      company: "Capgemini",
      role: "Senior Professional 1",
      period: "June 2022 - May 2023",
      highlights: [
        "Resolved a critical SHA-512 authentication failure affecting millions of Dell devices worldwide within 15 days.",
        "Presented root cause analysis directly to Dell's senior leadership team.",
        "Managed BSP delivery pipeline for global thin client platforms."
      ]
    },
    {
      company: "HCL Technologies",
      role: "Technical Lead",
      period: "May 2021 - May 2022",
      highlights: [
        "Led end-to-end delivery of mission-critical IoT Gateway projects.",
        "Reduced project delivery timeline by 2-4 months through proactive root cause analysis.",
        "Eliminated costly hardware revisions by identifying design flaws during validation."
      ]
    },
    {
      company: "United Fire Equipments",
      role: "Senior Engineer - Electronics Division",
      period: "Nov 2015 - May 2021",
      highlights: [
        "Established and led the entire electronics division from inception (0 to 20+ professionals).",
        "Directed lifecycle for 5+ safety-critical products including emergency lighting and medical devices.",
        "Achieved 100% adherence to IEC/BIS standards, creating a competitive regulatory moat."
      ]
    }
  ],

  education: [
    {
      degree: "MBA (Executive Management)",
      institution: "NMIMS Global Access",
      period: "Completed"
    },
    {
      degree: "B.Tech in Electrical, Electronics & Communications",
      institution: "DIT School of Engineering",
      period: "2009 - 2013"
    }
  ],

  insights: [
    {
      title: "Technical Failures are Board-Level Fiduciary Risks",
      excerpt: "Most boards lack the engineering depth to evaluate product risk until a crisis hits. I bring that depth to the boardroom."
    },
    {
      title: "The ROI of AI in Manufacturing",
      excerpt: "AI isn't just for software; it's a key Industry 4.0 competency that drives operational transformation and productivity."
    }
  ],

  products: [
    {
      id: "stm32-doccraft",
      title: "STM32 DocCraft — Precision Manual Segmenter & AI Context Engine",
      tagline: "High-performance orchestrator that segments monolithic 2,000+ page semiconductor manuals into precision Markdown, eliminating LLM context exhaustion for embedded developers.",
      category: "AI Systems & Tooling",
      badge: "Flagship AI Product",
      company: "AI Systems Engineering",
      period: "Latest Production Release",
      icon: "Zap",
      logo: "/products/DocCraft-logo.svg",
      image: "/products/stm32-doccraft.png",
      pipelineImage: "/products/stm32-doccraft-pipeline.png",
      outputImage: "/products/stm32-doccraft-output.png",
      downloadUrl: "https://github.com/errahulkm/rahul-kumar-portfolio/releases/download/v1.0.0/doccraft-mcu-v1.0.0-linux-x86_64.tar.gz",
      downloadFilename: "doccraft-mcu-v1.0.0-linux-x86_64.tar.gz",
      downloadSize: "64 MB",
      releaseNotesUrl: "https://github.com/errahulkm/rahul-kumar-portfolio/releases/tag/v1.0.0",
      problem: {
        headline: "LLM Context Window Exhaustion from 2,000+ Page Semiconductor Manuals",
        description: "Feeding monolithic 2,000+ page Reference Manual PDFs (e.g., STM32 RM0090, RM0487, 50MB+) into modern AI developer tools (Antigravity, Cursor, VS Code, Claude Code) exhausts LLM token context windows, triggers prompt truncation, induces severe register hallucinations, and spikes API token costs.",
        riskLevel: "Critical AI Bottleneck",
        painPoints: [
          "Massive 2,000+ page technical PDFs overwhelm LLM context limits, preventing reliable AI-assisted embedded coding",
          "LLMs hallucinate peripheral register addresses and bitfield masks without grounded, isolated documentation",
          "Embedded developers lose hours manually finding, copying, and formatting register tables for AI prompts"
        ]
      },
      solution: {
        headline: "Automated Project-Aware PDF Segmentation & High-Fidelity Markdown Engine",
        description: "Engineered a standalone, zero-dependency local application that automatically scans C/C++ firmware projects (detecting active peripherals like USART, SPI, DMA, I2C), segments the master Reference Manual into isolated peripheral IP-PDFs, and converts them into token-optimized, high-fidelity Markdown containing clean register bitfields and memory maps. Live validated on STM32U3 Series Reference Manual (RM0487, 32MB+, 65 chapters).",
        keyFeatures: [
          "IDE Project Scanner: Automatically detects active HAL/LL/CMSIS peripherals across Keil, IAR, and STM32CubeIDE source trees",
          "Intelligent Chapter Splitter: Automatically parses PDF outlines and extracts targeted peripheral chapters with zero loss",
          "High-Fidelity Markdown Converter: Preserves register tables, bitfield maps, and offset definitions tailored for LLM reasoning",
          "100% Offline & Self-Contained: Zero external Python/pip dependencies, ensuring complete corporate IP privacy and security",
          "Full Pipeline Verified: Batch splits and converts 65 chapters into modular ip-pdf and md outputs seamlessly"
        ]
      },
      impact: {
        metric: "90% Token Cut",
        label: "Context Exhaustion Solved",
        details: "Eliminated AI IDE context blowout; reduced context load from 1.5M tokens to targeted 15k token peripheral chunks with 100% register accuracy across 65 STM32U3 peripheral IPs."
      },
      rcaMethod: "Context Engineering & AST-Based Project Dependency Analysis",
      standards: ["STM32 HAL/LL", "CMSIS-Core", "CommonMark", "POSIX Standalone"],
      technologies: ["Python 3.12 / PyInstaller", "Flask Engine", "pdfplumber / PyMuPDF", "Cyberpunk Dark UI", "Context Engineering", "AST Code Parsing"],
      systemLayers: {
        hardware: "Targeted support for all ARM Cortex-M microcontrollers (STM32F4, F7, H7, G0, L4, etc.)",
        firmware: "Native detection of STM32CubeMX, FreeRTOS, HAL, LL, and Keil/IAR C/C++ project trees",
        protocols: "Local IPC, REST endpoints, dynamic port auto-discovery, zero cloud telemetry for corporate IP safety",
        governance: "AI Systems Consulting framework for enterprise LLM context optimization, token cost control, and hallucination prevention"
      }
    },
    {
      id: "iot-gateway",
      title: "Industrial IoT Edge Gateway & Telemetry Controller",
      tagline: "Ruggedized multi-protocol gateway bridging legacy factory machinery with real-time cloud telemetry.",
      category: "Industrial IoT & Edge",
      badge: "Mission-Critical Telemetry",
      company: "HCL Technologies",
      period: "May 2021 - May 2022",
      icon: "Cpu",
      problem: {
        headline: "Factory Data Silos & Costly Hardware Revision Delays",
        description: "Industrial plant machinery operated in isolated proprietary protocols. Client gateway prototypes suffered severe RS-485/CAN bus signal noise and frequent firmware lockups, causing multiple failed field validations and threatening a 6-month product launch delay.",
        riskLevel: "Market-Delay Risk",
        painPoints: [
          "Legacy factory machines unable to stream predictive maintenance telemetry",
          "Signal integrity and ground-loop noise on industrial serial communication lines",
          "Excessive board revision cycles burning R&D budget without root-cause clarity"
        ]
      },
      solution: {
        headline: "Ruggedized Edge Architecture with Proactive DFMEA",
        description: "Architected a high-immunity industrial gateway featuring hardware watchdog supervisors, isolated Modbus/CAN transceivers, FreeRTOS deterministic task scheduling, and secure edge-to-cloud MQTT streaming.",
        keyFeatures: [
          "Galvanically isolated RS-485, Modbus RTU/TCP, and CAN 2.0B interfaces",
          "Dual-bank fail-safe OTA firmware updates with hardware watchdog fallback",
          "Comprehensive Design Failure Mode and Effect Analysis (DFMEA) across all power rails"
        ]
      },
      impact: {
        metric: "2-4 Months",
        label: "Time-to-Market Accelerated",
        details: "Eliminated costly PCB re-spins through early simulation; achieved 99.99% continuous field uptime across pilot manufacturing plants."
      },
      rcaMethod: "DFMEA & Signal Integrity Eye-Diagram Analysis",
      standards: ["IEC 61000-4", "Modbus", "CAN 2.0B", "CE/FCC"],
      technologies: ["ARM Cortex-M4", "FreeRTOS", "Embedded C/C++", "MQTT", "Hardware Watchdog", "EMI Shielding"],
      systemLayers: {
        hardware: "Custom 4-layer PCB with isolated ground planes and TVS transient protection",
        firmware: "FreeRTOS multitasking kernel with deterministic interrupt handling and watchdog",
        protocols: "Modbus RTU/TCP, CANopen, MQTT with TLS 1.3 encryption",
        governance: "Pre-compliance EMC emission testing and MTBF reliability verification"
      }
    },
    {
      id: "secure-bsp",
      title: "Enterprise Secure BSP & Cryptographic Boot Engine",
      tagline: "Ultra-resilient Board Support Package & hardware cryptographic acceleration driver for global thin clients.",
      category: "Enterprise Firmware & Security",
      badge: "Millions of Endpoints",
      company: "Capgemini / Dell",
      period: "June 2022 - May 2023",
      icon: "ShieldAlert",
      problem: {
        headline: "Global SHA-512 Authentication Outage Risk Across Millions of Devices",
        description: "A critical cryptographic handshake and secure boot authentication failure was identified in production firmware across Dell thin-client devices worldwide. Endpoints failed to validate corporate certificates, risking global operational halts for banking, hospital, and enterprise clients.",
        riskLevel: "Global Escalation",
        painPoints: [
          "Millions of enterprise devices exposed to catastrophic authentication lockout",
          "Cryptographic SHA-512 timing skew between low-level hardware accelerator and kernel",
          "Extremely tight 15-day SLA to diagnose, patch, and regression-test without device recall"
        ]
      },
      solution: {
        headline: "Root-Cause Cryptographic Driver Optimization & Patch Pipeline",
        description: "Diagnosed race conditions in hardware cryptographic memory buffers under heavy asynchronous loads. Re-engineered low-level DMA interrupt handling, patched kernel crypto acceleration drivers, and established a validated automated regression matrix.",
        keyFeatures: [
          "Zero-latency SHA-512 hardware cryptographic engine pipeline alignment",
          "Kernel driver patch preserving full backward compatibility across legacy silicon",
          "Direct root-cause analysis presentation and validation for Dell senior leadership"
        ]
      },
      impact: {
        metric: "15 Days",
        label: "Global Crisis Resolution",
        details: "Resolved worldwide issue in 15 days; delivered zero-regression firmware update protecting millions of active enterprise devices."
      },
      rcaMethod: "Fault Tree Analysis (FTA) & Kernel DMA Trace Profiling",
      standards: ["FIPS 140-2", "SHA-512", "NIST SP 800-147", "ISO/IEC 27001"],
      technologies: ["Embedded Linux", "C/C++", "Kernel Device Drivers", "U-Boot", "Hardware Crypto Accelerators", "CI/CD"],
      systemLayers: {
        hardware: "x86 / ARM SoC secure cryptographic co-processor and TPM 2.0 enclave",
        firmware: "Optimized Board Support Package (BSP) and secure Linux kernel drivers",
        protocols: "TLS 1.3, PKCS#11, SHA-512 cryptographic verification pipeline",
        governance: "Executive Board RCA briefing, FIPS compliance sign-off, zero-regression audit"
      }
    },
    {
      id: "emergency-lighting",
      title: "Smart Central Emergency Lighting & Monitored Exit System",
      tagline: "Life-safety automated backup power, DALI diagnostics, and central battery systems for commercial facilities.",
      category: "Safety-Critical Hardware",
      badge: "Life-Safety Certified",
      company: "United Fire Equipments",
      period: "Nov 2015 - May 2021",
      icon: "AlertTriangle",
      problem: {
        headline: "Undetected Battery Failures & High Corporate Fiduciary Liability",
        description: "Emergency escape lighting and exit sign systems in high-rise buildings frequently suffered silent battery degradation. Building operators could not detect failing units until actual grid power failures occurred, exposing facility owners to severe life-safety violations and fiduciary negligence.",
        riskLevel: "Regulatory & Life Safety",
        painPoints: [
          "High risk of unlit exit paths during fires and power emergencies",
          "Labor-intensive manual monthly inspections required by municipal fire authorities",
          "Stringent IEC 60598-2-22 and Indian BIS certification requirements with zero tolerance for failure"
        ]
      },
      solution: {
        headline: "Intelligent Microcontroller-Driven Central Diagnostics & Switchover",
        description: "Architected a family of self-testing emergency exit systems with continuous battery impedance monitoring, thermal runaway protection, and sub-20ms instant emergency transfer circuits with DALI and RF telemetry.",
        keyFeatures: [
          "Sub-20 millisecond solid-state transfer switch from grid mains to battery backup",
          "Automated DALI-2 self-testing protocol reporting lamp and battery state to Central BMS",
          "Smart multistage battery management unit (BMU) extending cell service lifespan by 40%"
        ]
      },
      impact: {
        metric: "100%",
        label: "First-Pass IEC/BIS Compliance",
        details: "Achieved 100% adherence to IEC 60598-2-22 & BIS standards; scaled electronics division from 0 to 20+ engineers; zero life-safety field failures in 5+ years."
      },
      rcaMethod: "Accelerated Life Testing (ALT) & Thermal Stress Analysis",
      standards: ["IEC 60598-2-22", "IS 10322", "IEC 61347", "RoHS"],
      technologies: ["Microchip PIC / STM32", "Switch-Mode Power (SMPS)", "DALI-2", "RF Mesh", "Altium Designer", "DFMEA"],
      systemLayers: {
        hardware: "High-efficiency SMPS inverter with high-temperature LiFePO4 / Ni-MH chemistry",
        firmware: "Deterministic state machine running periodic automated self-test algorithms",
        protocols: "DALI / DALI-2 emergency lighting standard, RS-485 Modbus, Sub-GHz RF",
        governance: "Full IEC/BIS third-party laboratory certification & safety audit documentation"
      }
    },
    {
      id: "medical-telemetry",
      title: "Medical-Grade Diagnostic Telemetry & Biosignal Unit",
      tagline: "Ultra-low-noise patient monitoring controller engineered with medical-grade galvanic isolation.",
      category: "Safety-Critical Hardware",
      badge: "IEC 60601-1-2 Verified",
      company: "United Fire / Electronics Div",
      period: "Nov 2015 - May 2021",
      icon: "Activity",
      problem: {
        headline: "Excessive EMI/EMC Noise Inducing Clinical Biosensor Artifacts",
        description: "Sensitive microvolt-level physiological sensor signals were repeatedly corrupted by electromagnetic interference from internal switch-mode power supplies and ambient hospital RF equipment, preventing the product from passing mandatory IEC 60601 medical compliance.",
        riskLevel: "Regulatory & Life Safety",
        painPoints: [
          "Electromagnetic emissions causing spurious reading spikes in patient telemetry",
          "Strict patient leakage current limits (<10µA) preventing traditional ground loops",
          "Risk of failing clinical validation trials and incurring costly redesign cycles"
        ]
      },
      solution: {
        headline: "Galvanically Isolated Analog Front-End & Multi-Layer Shielding",
        description: "Engineered an analog front-end (AFE) with 4kV medical galvanic isolation, active common-mode noise cancellation, and a precision low-jitter ADC acquisition pipeline coupled to a medical-grade low-noise power supply topology.",
        keyFeatures: [
          "4kV galvanic isolation barrier with optical and capacitive isolation ICs",
          "High Common-Mode Rejection Ratio (CMRR > 110dB) active front-end filtering",
          "Multi-layer split ground plane PCB layout with Faraday shielding enclosure"
        ]
      },
      impact: {
        metric: "85%",
        label: "Noise Reduction Achieved",
        details: "Eliminated electromagnetic artifact noise; cleared stringent IEC 60601-1-2 medical EMC audit on first pass, securing regulatory approval."
      },
      rcaMethod: "EMC Near-Field Sniffing & Common-Mode Noise Decomposition",
      standards: ["IEC 60601-1-2 (4th Edition)", "ISO 14971", "IEC 62304"],
      technologies: ["Precision Analog Front-End", "Galvanic Isolators", "Low-Noise LDOs", "STM32 MCU", "DSP Filtering"],
      systemLayers: {
        hardware: "Isolated dual-zone PCB with optocouplers, medical isolated DC-DC, and RF shielding",
        firmware: "Digital FIR/IIR filtering algorithm running on Cortex-M core for artifact elimination",
        protocols: "Isolated SPI/UART internal bus with CRC-32 packet error detection",
        governance: "ISO 14971 Risk Management file preparation and third-party certified test reports"
      }
    },
    {
      id: "silicon-drivers",
      title: "Semiconductor Peripheral Drivers & AI-Accelerated Pipeline",
      tagline: "High-reliability silicon device drivers and automated GenAI-assisted validation workflows.",
      category: "Silicon & AI Automation",
      badge: "50% Productivity Surge",
      company: "STMicroelectronics",
      period: "May 2023 - Present",
      icon: "Zap",
      problem: {
        headline: "Silicon Driver Complexity, Corner-Case Bugs & Development Latency",
        description: "Modern microcontroller silicon includes dozens of complex peripherals (DMA, Timers, Communication controllers). Developing bug-free low-level drivers across dozens of pinout variants traditionally required months of manual scaffolding, causing firmware delivery bottlenecks for global OEM customers.",
        riskLevel: "Productivity Bottleneck",
        painPoints: [
          "Lengthy manual driver verification cycles delaying silicon adoption",
          "Subtle silicon errata and timing corner-cases escaping to customer builds",
          "Heavy engineering overhead required for boilerplate driver documentation"
        ]
      },
      solution: {
        headline: "Robust HAL Driver Architecture Coupled with GenAI Test Generation",
        description: "Architected fault-tolerant peripheral drivers while pioneering internal Generative AI workflows to automatically synthesize unit test fixtures, corner-case stress scenarios, and register-level technical documentation.",
        keyFeatures: [
          "MISRA-C compliant hardware abstraction layer (HAL) and low-level peripheral drivers",
          "GenAI-powered test generator targeting silicon corner cases and register state transitions",
          "Automated static analysis integration with zero-defect compliance gates"
        ]
      },
      impact: {
        metric: "50%",
        label: "Engineering Productivity Gain",
        details: "Pioneered team-wide AI adoption for code generation and documentation; significantly improved driver MTBF and accelerated silicon time-to-market."
      },
      rcaMethod: "Static Code Analysis (Coverity) & Register-Level State Fuzzing",
      standards: ["MISRA-C:2012", "ISO 26262 Readiness", "Automotive SPICE"],
      technologies: ["C / Embedded C", "ARM Cortex-M/R", "Generative AI / LLMs", "GitLab CI", "Static Analysis", "Hardware Debuggers"],
      systemLayers: {
        hardware: "STMicroelectronics 32-bit Microcontroller silicon architectures",
        firmware: "MISRA-compliant bare-metal and RTOS peripheral device drivers",
        protocols: "SPI, I2C, UART, CAN-FD, USB, Ethernet MAC drivers",
        governance: "AI adoption governance guidelines and silicon qualification sign-offs"
      }
    }
  ],

  releases: [
    {
      id: "doccraft-mcu-v100",
      productName: "DocCraft MCU / STM32 DocCraft",
      version: "v1.0.0",
      tag: "Production Release",
      releaseDate: "September 2026",
      filename: "doccraft-mcu-v1.0.0-linux-x86_64.tar.gz",
      fileSize: "64 MB",
      platform: "Linux x86_64 (Standalone Tarball)",
      downloadUrl: "https://github.com/errahulkm/rahul-kumar-portfolio/releases/download/v1.0.0/doccraft-mcu-v1.0.0-linux-x86_64.tar.gz",
      releaseNotesUrl: "https://github.com/errahulkm/rahul-kumar-portfolio/releases/tag/v1.0.0",
      description: "Standalone production release. Fully self-contained with bundled Python 3.12 runtime and UI assets. Zero external dependencies required.",
      quickStartCommands: [
        "tar -xzf doccraft-mcu-v1.0.0-linux-x86_64.tar.gz",
        "cd doccraft-mcu-v1.0.0-linux-x86_64",
        "./run.sh"
      ],
      highlights: [
        "Zero External Dependencies: Runs on fresh Linux systems without Python or pip.",
        "100% Offline & Secure: Zero cloud calls, protecting enterprise firmware IP.",
        "Automatic Port Migration: Automatically switches to next free port if 8000 is occupied.",
        "High-Fidelity Markdown: Converts 2,000+ page manuals into token-efficient register tables for AI agents."
      ]
    }
  ]
};
