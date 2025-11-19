"use client";

import React from "react";
import { motion } from "framer-motion";

// Product data for Grammarly and alternatives
const tools = [
  {
    key: "grammarly",
    name: "Grammarly",
    logo: "/logos/grammarly.png",
    tagline: "AI-powered writing assistant",
    price: "Free / Premium $12/mo",
    rating: "4.7 / 5",
    features: {
      grammarCheck: "Yes",
      plagiarismDetection: "Yes (Premium)",
      writingStyleSuggestions: "Yes",
      integrations: "Browser, MS Office, Desktop Apps",
      languagesSupported: "English",
    },
    pros: [
      "Advanced grammar & spell check",
      "Tone detection & clarity suggestions",
      "Robust browser & app integrations",
      "Widely trusted by millions",
    ],
    cons: [
      "Premium required for plagiarism & advanced feedback",
      "Limited support for non-English languages",
    ],
    affiliateUrl: "https://affiliate.example.com/grammarly",
  },
  {
    key: "prowritingaid",
    name: "ProWritingAid",
    logo: "/logos/prowritingaid.png",
    tagline: "In-depth writing reports",
    price: "Free / Premium $20/mo",
    rating: "4.5 / 5",
    features: {
      grammarCheck: "Yes",
      plagiarismDetection: "Yes (premium)",
      writingStyleSuggestions: "Yes, detailed",
      integrations: "MS Word, Google Docs, Scrivener",
      languagesSupported: "English",
    },
    pros: [
      "Detailed style and writing reports",
      "Affordable pricing options",
      "Desktop & browser integrations",
      "One-time license for desktop version",
    ],
    cons: [
      "User interface less modern",
      "Some false positives in grammar suggestions",
    ],
    affiliateUrl: "https://affiliate.example.com/prowritingaid",
  },
  {
    key: "ginger",
    name: "Ginger",
    logo: "/logos/ginger.png",
    tagline: "Contextual grammar correction",
    price: "Free / Premium $13/mo",
    rating: "4.3 / 5",
    features: {
      grammarCheck: "Yes",
      plagiarismDetection: "No",
      writingStyleSuggestions: "Basic",
      integrations: "Browser, MS Office",
      languagesSupported: "English, Spanish, French",
    },
    pros: [
      "Contextual grammar corrections",
      "Multi-language support",
      "Personal trainer for writing skills",
      "Mobile apps available",
    ],
    cons: [
      "No plagiarism checker",
      "Limited style suggestions",
    ],
    affiliateUrl: "https://affiliate.example.com/ginger",
  },
  {
    key: "whiteSmoke",
    name: "WhiteSmoke",
    logo: "/logos/whitesmoke.png",
    tagline: "Comprehensive error detection",
    price: "Premium $16/mo",
    rating: "4.0 / 5",
    features: {
      grammarCheck: "Yes",
      plagiarismDetection: "Yes",
      writingStyleSuggestions: "Moderate",
      integrations: "Browser, MS Office, Desktop",
      languagesSupported: "English",
    },
    pros: [
      "Full error detection",
      "Translation features",
      "Video tutorials and templates",
      "Simple interface",
    ],
    cons: [
      "User interface outdated",
      "Pricing higher for features",
    ],
    affiliateUrl: "https://affiliate.example.com/whitesmoke",
  },
];

// Components:
function ToolCard({ tool }: { tool: typeof tools[0] }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      style={styles.card}
      aria-label={`${tool.name} overview card`}
    >
      <img src={tool.logo} alt={`${tool.name} logo`} style={styles.logo} loading="lazy" />
      <h3 style={styles.cardTitle}>{tool.name}</h3>
      <p style={styles.tagline}>{tool.tagline}</p>
      <p style={styles.price}>Price: <strong>{tool.price}</strong></p>
      <p style={styles.rating}>Rating: <strong>{tool.rating}</strong></p>
      <h4 style={styles.subheading}>Pros</h4>
      <ul>
        {tool.pros.map((pro) => (
          <li key={pro} style={styles.listItem}>{pro}</li>
        ))}
      </ul>
      <h4 style={styles.subheading}>Cons</h4>
      <ul>
        {tool.cons.map((con) => (
          <li key={con} style={styles.listItem}>{con}</li>
        ))}
      </ul>
      <a
        href={tool.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.ctaButton}
        aria-label={`Get ${tool.name} now`}
      >
        Get {tool.name}
      </a>
    </motion.div>
  );
}

function ComparisonTable() {
  return (
    <div style={styles.tableWrapper}>
      <table style={styles.table} aria-label="Detailed Grammarly alternatives comparison">
        <thead>
          <tr>
            <th style={styles.th}>Feature</th>
            {tools.map((tool) => (
              <th key={tool.key} style={styles.th}>
                <img
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  style={{ maxHeight: "40px", marginBottom: "10px" }}
                  loading="lazy"
                />
                <div>{tool.name}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(tools[0].features).map((featureKey) => (
            <tr key={featureKey}>
              <td style={styles.td}>
                {featureKey
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </td>
              {tools.map((tool) => (
                <td key={tool.key + featureKey} style={styles.td}>
                  {tool.features[featureKey as keyof typeof tool.features]}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td style={styles.td}>Affiliate Link</td>
            {tools.map((tool) => (
              <td key={tool.key + "affiliate"} style={styles.td}>
                <a
                  href={tool.affiliateUrl}
                  style={styles.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Buy ${tool.name} via affiliate link`}
                >
                  Buy Now
                </a>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default function GrammarlyComparisonPage() {
  return (
    <main style={styles.main}>
      {/* Branding */}
      <motion.header
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={styles.header}
      >
        <div style={styles.branding}>
          <span style={styles.brandLogo}>✍️ digiCompares</span>
        </div>
        <h1 style={styles.title}>Grammarly & Alternatives — 2025 Comprehensive Comparison</h1>
        <p style={styles.subtitle}>
          Find the best writing assistant tool that fits your needs with detailed feature, pricing, pros & cons analysis.
        </p>
      </motion.header>

      {/* Tools Cards */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Top AI Writing Assistants</h2>
        <div style={styles.cardsGrid}>
          {tools.map((tool) => (
            <ToolCard key={tool.key} tool={tool} />
          ))}
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Feature Comparison Table</h2>
        <ComparisonTable />
      </section>

      {/* Disclaimer */}
      <footer style={styles.footer}>
        <p style={{ maxWidth: "700px", margin: "0 auto" }}>
          Disclaimer: digiCompares is an independent platform providing unbiased reviews and comparisons. We may earn commissions from affiliate links that help support our work. Always consider your needs and conduct personal research before purchasing any software.
        </p>
      </footer>
    </main>
  );
}

const styles = {
  main: {
    fontFamily: "'Inter', sans-serif",
    background: "#f9fafb",
    minHeight: "100vh",
    padding: "3rem 1rem 4rem",
    color: "#1e293b",
  },
  header: {
    textAlign: "center" as const,
    marginBottom: "2.8rem",
  },
  branding: {
    marginBottom: "0.5rem",
  },
  brandLogo: {
    backgroundColor: "#2563eb",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "12px",
    fontWeight: "700",
    fontSize: "1rem",
    letterSpacing: "2px",
  },
  title: {
    fontSize: "2.8rem",
    fontWeight: "900",
    color: "#1e40af",
    marginTop: "14px",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#475569",
    marginTop: "12px",
    maxWidth: "720px",
    marginLeft: "auto",
    marginRight: "auto",
    lineHeight: 1.5,
  },

  section: {
    marginBottom: "3.5rem",
  },
  sectionTitle: {
    fontSize: "2rem",
    fontWeight: "800",
    textAlign: "center" as const,
    color: "#2563eb",
    marginBottom: "2rem",
  },

  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px,1fr))",
    gap: "2.4rem",
    maxWidth: "1080px",
    margin: "0 auto",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: "20px",
    padding: "1.8rem 1.6rem 2.2rem",
    boxShadow: "0 15px 30px rgb(37 99 235 / 0.1)",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    textAlign: "center" as const,
    transition: "transform 0.3s ease",
    cursor: "pointer",
  },
  logo: {
    maxWidth: 90,
    marginBottom: "18px",
  },
  cardTitle: {
    fontWeight: "900",
    fontSize: "1.5rem",
    color: "#1e293b",
    marginBottom: "6px",
  },
  tagline: {
    marginBottom: "14px",
    fontWeight: "600",
    color: "#475569",
    fontSize: "1rem",
  },
  price: {
    fontWeight: "700",
    color: "#2563eb",
    marginBottom: "10px",
    fontSize: "1rem",
  },
  rating: {
    fontWeight: "600",
    marginBottom: "16px",
    color: "#0f172a",
    fontSize: "1rem",
  },
  subheading: {
    fontWeight: "700",
    fontSize: "1.1rem",
    textAlign: "left" as const,
    alignSelf: "stretch",
    marginBottom: "8px",
    color: "#2563eb",
  },
  listItem: {
    textAlign: "left" as const,
    fontSize: "0.9rem",
    color: "#475569",
    marginBottom: "6px",
  },
  ctaButton: {
    marginTop: "auto",
    padding: "12px 22px",
    backgroundColor: "#2563eb",
    color: "#fff",
    fontWeight: 700,
    fontSize: "1rem",
    borderRadius: "12px",
    textDecoration: "none",
    boxShadow: "0 9px 30px rgb(37 99 235 / 0.25)",
    display: "inline-block",
    transition: "background-color 0.3s ease",
  },

  tableWrapper: {
    overflowX: "auto" as const,
    maxWidth: "1080px",
    margin: "0 auto",
    borderRadius: "14px",
    boxShadow: "0 15px 40px rgb(37 99 235 / 0.16)",
    border: "2px solid #2563eb",
    backgroundColor: "#fff",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    minWidth: "670px",
  },
  th: {
    padding: "20px",
    backgroundColor: "#2563eb",
    color: "#fff",
    fontWeight: "700",
    fontSize: "1rem",
    borderBottom: "3px solid #1e3a8a",
    textAlign: "center" as const,
    verticalAlign: "middle" as const,
  },
  td: {
    padding: "16px 18px",
    textAlign: "center" as const,
    borderBottom: "1.5px solid #cbd5e1",
    fontSize: "0.95rem",
    color: "#1e293b",
    verticalAlign: "middle" as const,
  },
  ctaLink: {
    color: "#2563eb",
    fontWeight: "700",
    textDecoration: "underline",
  },

  footer: {
    textAlign: "center" as const,
    fontSize: "0.8rem",
    paddingTop: "2rem",
    maxWidth: "750px",
    margin: "0 auto",
    color: "#64748b",
    lineHeight: 1.4,
  },
};
