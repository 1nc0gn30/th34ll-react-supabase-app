const Cybersecurity = [
    {
      name: "Wireshark",
      url: "https://www.wireshark.org/",
      description: "A network protocol analyzer that lets you capture and interactively browse the traffic running on a computer network."
    },
    {
      name: "Metasploit",
      url: "https://www.metasploit.com/",
      description: "A powerful tool for conducting penetration tests, exploiting vulnerabilities, and validating security measures."
    },
    {
      name: "Nmap",
      url: "https://nmap.org/",
      description: "A network scanner used to discover hosts and services on a computer network, thus building a 'map' of the network."
    },
    {
      name: "Burp Suite",
      url: "https://portswigger.net/burp",
      description: "An integrated platform for performing security testing of web applications, offering a range of tools for mapping, analyzing, and exploiting web apps."
    },
    {
      name: "OWASP ZAP",
      url: "https://www.zaproxy.org/",
      description: "The Zed Attack Proxy (ZAP) is an easy-to-use integrated penetration testing tool for finding vulnerabilities in web applications."
    },
    {
      name: "Kali Linux",
      url: "https://www.kali.org/",
      description: "A Debian-based Linux distribution aimed at advanced Penetration Testing and Security Auditing, packed with hundreds of tools for various information security tasks."
    },
    {
      name: "John the Ripper",
      url: "http://www.openwall.com/john/",
      description: "A fast password cracker, currently available for many flavors of Unix, Windows, DOS, BeOS, and OpenVMS."
    },
    {
      name: "Malwarebytes",
      url: "https://www.malwarebytes.com/",
      description: "A comprehensive cybersecurity program that crushes old and new threats before they cause harm."
    },
    {
      name: "Snort",
      url: "https://www.snort.org/",
      description: "An open-source network intrusion detection system (NIDS) that is capable of performing real-time traffic analysis and packet logging."
    },
    {
      name: "Qualys",
      url: "https://www.qualys.com/",
      description: "A provider of cloud security, compliance, and related services for small and large organizations."
    },
    // Additional tools
    {
      name: "Tails",
      url: "https://tails.boum.org/",
      description: "A portable operating system that protects against surveillance and censorship, allowing you to browse the internet anonymously."
    },
    {
      name: "Tor Browser",
      url: "https://www.torproject.org/",
      description: "A free and open-source web browser designed for anonymous web surfing and protection against traffic analysis."
    },
    {
      name: "Aircrack-ng",
      url: "https://www.aircrack-ng.org/",
      description: "A complete suite of tools to assess WiFi network security, focusing on monitoring, attacking, testing, and cracking."
    },
    {
      name: "Hashcat",
      url: "https://hashcat.net/hashcat/",
      description: "An advanced password recovery tool supporting a large array of hashing algorithms, known for its speed and versatility."
    },
    {
      name: "YARA",
      url: "https://virustotal.github.io/yara/",
      description: "A tool aimed at (but not limited to) helping malware researchers to identify and classify malware samples."
    },
    {
        name: "Ghidra",
        url: "https://ghidra-sre.org/",
        description: "A software reverse engineering (SRE) suite of tools developed by NSA's Research Directorate for analyzing compiled code."
      },
      {
        name: "Cuckoo Sandbox",
        url: "https://cuckoosandbox.org/",
        description: "An open-source automated malware analysis system, allowing you to throw any suspicious file at it and receive back some detailed results outlining what it does."
      },
      {
        name: "MISP",
        url: "https://www.misp-project.org/",
        description: "A threat intelligence platform for gathering, sharing, storing, and correlating Indicators of Compromise of targeted attacks, threat intelligence, financial fraud information, vulnerability information, or even counter-terrorism information."
      },
      {
        name: "The Sleuth Kit & Autopsy",
        url: "https://www.sleuthkit.org/",
        description: "Open-source digital forensics tools that can be used to analyze disk images and recover files from them, while Autopsy serves as a graphical interface to the command-line utilities."
      },
      {
        name: "BloodHound",
        url: "https://github.com/BloodHoundAD/BloodHound",
        description: "Uses graph theory to reveal the hidden and often unintended relationships within an Active Directory environment. Attackers can use BloodHound to easily identify highly complex attack paths that would otherwise be impossible to quickly identify."
      },
      {
        name: "BeEF (Browser Exploitation Framework)",
        url: "http://beefproject.com/",
        description: "A powerful penetration testing tool that focuses on the web browser, allowing professional pen-testers to assess the actual security posture of a target environment by using client-side attack vectors."
      },
      {
        name: "sqlmap",
        url: "http://sqlmap.org/",
        description: "An open-source penetration testing tool that automates the process of detecting and exploiting SQL injection flaws and taking over database servers."
      },
      {
        name: "GRR Rapid Response",
        url: "https://grr.github.io/",
        description: "An incident response framework focused on remote live forensics. It consists of a Python agent (client) that is installed on target systems, and server infrastructure that can manage and analyze data from many thousands of clients."
      },
      {
        name: "MITMproxy",
        url: "https://mitmproxy.org/",
        description: "An open-source tool for intercepting, viewing, and modifying network traffic. Used for network debugging, as well as penetration testing."
      },
      {
        name: "Volatility",
        url: "https://www.volatilityfoundation.org/",
        description: "An open-source memory forensics framework for incident response and malware analysis. It is written in Python and supports analysis for Windows, Linux, and Mac memory dumps."
      },
      {
        name: "Wazuh",
        url: "https://wazuh.com/",
        description: "A free, open-source, and enterprise-ready security monitoring solution for threat detection, integrity monitoring, incident response, and compliance."
      },
      {
        name: "OSQuery",
        url: "https://osquery.io/",
        description: "An open-source tool that enables you to query and log the state of your operating systems via SQL-based queries."
      },
      {
        name: "Radare2",
        url: "https://www.radare.org/r/",
        description: "A portable reversing framework that can disassemble, debug, analyze, and manipulate binary files. It caters to a vast array of architectures and operating systems."
      },
      {
        name: "OpenVAS",
        url: "https://www.openvas.org/",
        description: "A full-featured vulnerability scanner. It's open-source and designed to manage and maintain security from the vulnerabilities across your network."
      },
      {
        name: "Moloch",
        url: "https://molo.ch/",
        description: "An open-source, large-scale, full packet capturing, indexing, and database system. Moloch augments your current security infrastructure to store and index network traffic in standard PCAP format."
      },
      {
        name: "Frida",
        url: "https://frida.re/",
        description: "A dynamic code instrumentation toolkit. Frida lets you inject snippets of JavaScript or your own library into native apps on Windows, macOS, Linux, iOS, Android, and QNX."
      },
      {
        name: "Binary Ninja",
        url: "https://binary.ninja/",
        description: "A reverse engineering platform that is rich in GUI and capable of analyzing binary files with a clean and straightforward interface, facilitating understanding of code."
      },
      {
        name: "PEiD",
        url: "https://www.aldeid.com/wiki/PEiD",
        description: "A tool for detecting most common packers, cryptors, and compilers found in PE executable files. It's useful for malware analysis and digital forensics."
      },
      {
        name: "Xplico",
        url: "https://www.xplico.org/",
        description: "An open-source network forensic analysis tool (NFAT) that reconstructs the contents of acquisitions performed with a packet sniffer (e.g., Wireshark, tcpdump)."
      },
      {
        name: "Empire",
        url: "https://github.com/EmpireProject/Empire",
        description: "A post-exploitation framework that includes a pure PowerShell2.0 Windows agent and a Python 2.6/2.7 Linux/OS X agent."
      },
      {
        name: "Pupy",
        url: "https://github.com/n1nj4sec/pupy",
        description: "An open-source, cross-platform (Windows, Linux, macOS, Android) remote administration and post-exploitation tool, mainly written in Python."
      },
      {
        name: "Cobalt Strike",
        url: "https://www.cobaltstrike.com/",
        description: "A software for Adversary Simulations and Red Team Operations which replicates sophisticated threats in a network."
      },
      {
        name: "Shellter",
        url: "https://www.shellterproject.com/",
        description: "A dynamic malware analysis tool that can be used to assess the stealthiness of malware with respect to antivirus software by creating custom shellcode."
      },
      {
        name: "Quark-Engine",
        url: "https://quark-engine.com/",
        description: "An obfuscation-resilient Android malware scoring system, leveraging the concept of opcode sequence to analyze Android applications."
      },
      {
        name: "ZAP (Zscaler Application Profiler)",
        url: "https://www.zscaler.com/products/zscaler-application-profiler",
        description: "Provides a comprehensive security assessment for applications deployed in the cloud or on-premises, identifying vulnerabilities and compliance issues."
      },
      {
        name: "King Phisher",
        url: "https://github.com/securestate/king-phisher",
        description: "A tool for testing and promoting user awareness by simulating real-world phishing attacks in a safe, controlled environment."
      },
      {
        name: "Fierce",
        url: "https://github.com/mschwager/fierce",
        description: "A DNS reconnaissance tool for locating non-contiguous IP space and associated network hosts, providing a quick overview of the attack surface."
      },
      
      {
        name: "Faraday",
        url: "https://www.faradaysec.com/",
        description: "An integrated multi-user penetration testing environment that maps and leverages all the knowledge you generate in real-time, letting you track and understand your audits."
      },
      {
        name: "SpiderFoot",
        url: "https://www.spiderfoot.net/",
        description: "An open-source intelligence (OSINT) automation tool. It integrates with just about every data source available and uses a range of methods for data analysis, making OSINT collection fast and easy."
      },
      {
        name: "SilentTrinity",
        url: "https://github.com/byt3bl33d3r/SILENTTRINITY",
        description: "A post-exploitation agent powered by Python, IronPython, C#/.NET that supports modules in C#, Python, and PowerShell."
      },
      {
        name: "Photon",
        url: "https://github.com/s0md3v/Photon",
        description: "A fast crawler designed for OSINT (Open Source Intelligence) and penetration testing, capable of extracting URLs, emails, files, website accounts, and much more."
      },
      {
        name: "Amass",
        url: "https://github.com/OWASP/Amass",
        description: "The OWASP Amass Project performs network mapping of attack surfaces and external asset discovery using open-source information gathering and active reconnaissance techniques."
      },
      {
        name: "Magnum Opus",
        url: "https://github.com/magnunopus/magnum-opus",
        description: "A comprehensive toolkit for network intrusion analysis and penetration testing, focusing on automation and effectiveness in simulated cyber attacks."
      },
      {
        name: "Sublist3r",
        url: "https://github.com/aboul3la/Sublist3r",
        description: "A python tool designed to enumerate subdomains of websites using OSINT. It helps penetration testers and bug hunters collect and gather subdomains for the domain they are targeting."
      },
      {
        name: "Responder",
        url: "https://github.com/lgandx/Responder",
        description: "A LLMNR, NBT-NS and MDNS poisoner, designed to be used during penetration tests to achieve credentials theft."
      },
      {
        name: "Ruler",
        url: "https://github.com/sensepost/ruler",
        description: "A tool that interacts with Exchange servers remotely to gain a foothold on the internal environment of an organization."
      },
      {
        name: "CrowdStrike Falcon",
        url: "https://www.crowdstrike.com/",
        description: "A cloud-delivered endpoint protection platform that provides next-generation antivirus, endpoint detection and response (EDR), managed threat hunting, and much more."
      },
      {
        name: "Binary Defense",
        url: "https://www.binarydefense.com/",
        description: "Offers a comprehensive suite of security solutions including managed detection and response, threat hunting, and counterintelligence to protect organizations from cyber threats."
      },
      {
        name: "Mitre Caldera",
        url: "https://github.com/mitre/caldera",
        description: "An automated adversary emulation system that performs post-compromise adversarial behavior within Windows Active Directory environments."
      },
      {
        name: "CrackMapExec",
        url: "https://github.com/byt3bl33d3r/CrackMapExec",
        description: "A swiss army knife for pentesting networks. Designed to facilitate tasks for pentesters during internal network assessments."
      },
      {
        name: "RedHawk",
        url: "https://github.com/Tuhinshubhra/RED_HAWK",
        description: "An all-in-one tool for information gathering, SQL vulnerability scanning, and crawling. A great choice for reconnaissance phase during a penetration test."
      },
      {
        name: "Atomic Red Team",
        url: "https://github.com/redcanaryco/atomic-red-team",
        description: "A collection of small, highly portable detection tests mapped to the MITRE ATT&CK Framework, enabling security teams to test their defenses in a realistic but low-impact manner."
      },
      {
        name: "BadBlood",
        url: "https://github.com/davidprowe/BadBlood",
        description: "Fills a Microsoft Active Directory domain with a structure and thousands of objects to simulate a corporate environment for testing and training purposes."
      },
      {
        name: "GoPhish",
        url: "https://getgophish.com/",
        description: "An open-source phishing toolkit designed for businesses and penetration testers to simulate real-world phishing attacks."
      },
      {
        name: "PEASS - Privilege Escalation Awesome Scripts SUITE",
        url: "https://github.com/carlospolop/PEASS-ng",
        description: "Collection of scripts that detect misconfigurations potentially leading to privilege escalation on Windows and Unix/Linux systems."
      },
      {
        name: "LaZagne",
        url: "https://github.com/AlessandroZ/LaZagne",
        description: "A open source application used to retrieve lots of passwords stored on a local computer. Each software stores its passwords using different techniques (plaintext, APIs, custom algorithms, databases, etc.)."
      },
      {
        name: "LinEnum",
        url: "https://github.com/rebootuser/LinEnum",
        description: "A script for post-exploitation auditing and privilege escalation on Linux systems. It searches for misconfigurations and avenues for escalation."
      },
      {
        name: "PentestBox",
        url: "https://pentestbox.com/",
        description: "An open-source pre-configured portable penetration testing environment for the Windows Operating System."
      },
      {
        name: "PowerSploit",
        url: "https://github.com/PowerShellMafia/PowerSploit",
        description: "A collection of Microsoft PowerShell modules that can be used to aid penetration testers during all phases of an assessment."
      },
      {
        name: "PsExec",
        url: "https://docs.microsoft.com/en-us/sysinternals/downloads/psexec",
        description: "A light-weight telnet-replacement that lets you execute processes on other systems, complete with full interactivity for console applications, without having to manually install client software."
      },
      {
        name: "Rubeus",
        url: "https://github.com/GhostPack/Rubeus",
        description: "A C# toolset for raw Kerberos interaction and abuses. It is heavily adapted from Benjamin Delpy's Kekeo project."
      },
      {
        name: "Seatbelt",
        url: "https://github.com/GhostPack/Seatbelt",
        description: "A C# project that performs a number of security oriented host-survey \"safety checks\" relevant from both offensive and defensive security perspectives."
      },
      {
        name: "SharpHound",
        url: "https://github.com/BloodHoundAD/SharpHound",
        description: "The data collector for BloodHound, designed to capture the Active Directory environment to identify the attack paths."
      },
      {
        name: "SharpUp",
        url: "https://github.com/GhostPack/SharpUp",
        description: "A C# port of various PowerUp functionality, aimed at checking for common Windows privilege escalation vectors."
      },
      {
        name: "Spyse",
        url: "https://spyse.com/",
        description: "A cybersecurity search engine ideal for gathering data about domains, DNS, subdomains, IPs, SSL/TLS certificates, cryptocurrency transactions and blockchain for investigations and security analysis."
      },
      {
        name: "Watobo",
        url: "https://github.com/siberas/watobo",
        description: "WATOBO is a security tool for web applications. It is intended to enable security professionals to perform efficient (semi-automated) web application security audits."
      },
    // Consider adding more tools as needed
  ];

  export default Cybersecurity;