"use client";

import React from "react";
import { motion } from "framer-motion";

const brokers = [
  {
    key: "zerodha",
    name: "Zerodha",
    logo: "/logos/zerodha.png",
    features: [
      "Zero delivery brokerage",
      "₹20 intraday per order",
      "Fast execution, low latency",
      "Top-rated Kite platform",
    ],
    link: "https://zerodha.com/open-account",
    isTopBroker: true,
  },
  {
    key: "upstox",
    name: "Upstox",
    logo: "/logos/upstox.png",
    features: [
      "Free delivery trades",
      "10,000+ mutual funds",
      "Fast account opening",
      "Low-cost intraday/F&O",
    ],
    link: "https://upstox.com/",
    isTopBroker: false,
  },
  {
    key: "angel",
    name: "Angel One",
    logo: "/logos/angelone.png",
    features: [
      "Rule-based advisory",
      "₹0 delivery, ₹20 margin",
      "Free research reports",
      "Smart API for developers",
    ],
    link: "https://www.angelone.in/",
    isTopBroker: false,
  },
  {
    key: "icici",
    name: "ICICI Direct",
    logo: "/logos/icici.png",
    features: [
      "Trusted banking & trading",
      "Integrated 3-in-1 account",
      "Pro-level trade execution",
      "Premium services",
    ],
    link: "https://www.icicidirect.com/",
    isTopBroker: false,
  },
  {
    key: "groww",
    name: "Groww",
    logo: "/logos/groww.png",
    features: [
      "Completely free account",
      "Beginner-friendly UI",
      "ZERO delivery fees",
      "Great mobile app",
    ],
    link: "https://groww.in/",
    isTopBroker: false,
  },
];

export default function DematComparisonPage() {
  return (
    <main style={styles.main}>
      {/* Top Branding */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={styles.header}
      >
        <div style={styles.branding}>
          <span style={styles.logo}>🐐 ZooCompares</span>
        </div>
        <h1 style={styles.title}>Top Demat Accounts in India — 2025 Review</h1>
        <p style={styles.subtitle}>
          Discover the best demat and trading accounts based on charges,
          features, platforms & user experience.
        </p>
      </motion.header>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          style={styles.heroWrapper}
        >
          <h2 style={styles.heroTitle}>Make the Smart Trading Choice Today</h2>
          <p style={styles.heroText}>
            Whether you’re new to the market or an experienced trader, our
            detailed comparison of India’s top brokers will help you find your
            perfect match, with ZERO guesswork.
          </p>
        </motion.div>
      </section>

      {/* Broker Cards */}
      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Top 5 Brokers: Reviewed & Ranked 🔍</h3>
        <div style={styles.cardGrid}>
          {brokers.map((broker) => (
            <BrokerCard key={broker.key} broker={broker} />
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Detailed Feature & Pricing Comparison</h3>
        <p style={{ marginBottom: "14px", textAlign: "center", color: "#475569" }}>
          Here’s a bird’s-eye view to compare fees, trading charges, platform
          features, and suitability across the top five brokers.
        </p>
        <div style={styles.tableWrapper}>
          <table style={styles.table} aria-label="Broker Feature Comparison">
            <thead>
              <tr>
                <th style={styles.th}>Broker</th>
                <th style={styles.th}>Account Opening</th>
                <th style={styles.th}>Delivery Charges</th>
                <th style={styles.th}>Intraday Brokerage</th>
                <th style={styles.th}>Platform</th>
                <th style={styles.th}>Best For</th>
              </tr>
            </thead>
            <tbody>
              <ComparisonRows />
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Reminder */}
      <section style={{ ...styles.section, textAlign: "center" }}>
        <h3 style={styles.sectionTitle}>Not Sure Yet? No Worries.</h3>
        <p style={{ marginBottom: "18px", color: "#475569", maxWidth: "520px", margin: "0 auto" }}>
          You don't have to decide now — explore, bookmark and revisit, or open a
          free account today and start investing in just a few clicks.
        </p>
        <a
          href="https://zerodha.com/open-account"
          style={styles.primaryCTA}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Zerodha - India's No.1 Broker"
        >
          Open Zerodha — India's No.1 Broker
        </a>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>📊 Updated: Jan 2025 — ZooCompares.com | Stay smart, invest better 🔄</p>
      </footer>
    </main>
  );
}

function BrokerCard({ broker }: { broker: typeof brokers[0] }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      style={{
        ...styles.card,
        border: broker.isTopBroker ? "3px solid #2563eb" : "1.5px solid #cbd5e1",
        boxShadow: broker.isTopBroker
          ? "0 15px 30px rgba(59,130,246,0.5)"
          : "0 8px 18px rgba(0,0,0,0.1)",
      }}
      aria-label={`${broker.name} broker card`}
    >
      <img
        src={broker.logo}
        alt={`${broker.name} logo`}
        style={styles.cardLogo}
        loading="lazy"
      />
      <h4 style={styles.cardTitle}>
        {broker.name}
        {broker.isTopBroker && <span style={styles.bestTag}>#1 Choice</span>}
      </h4>
      <ul style={styles.cardFeatures}>
        {broker.features.map((feature) => (
          <li key={feature} style={styles.cardFeatureItem}>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={broker.link}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.cardCTA}
        aria-label={`Open ${broker.name} Account`}
      >
        Open Account →
      </a>
    </motion.div>
  );
}

function ComparisonRows() {
  return (
    <>
      <tr>
        <td style={styles.td}><strong>Zerodha</strong></td>
        <td style={styles.td}>₹0</td>
        <td style={styles.td}>₹0</td>
        <td style={styles.td}>₹20 (flat)</td>
        <td style={styles.td}>Kite</td>
        <td style={styles.td}>High-volume traders</td>
      </tr>
      <tr>
        <td style={styles.td}><strong>Upstox</strong></td>
        <td style={styles.td}>₹249</td>
        <td style={styles.td}>₹0</td>
        <td style={styles.td}>₹20 (flat)</td>
        <td style={styles.td}>Upstox Pro</td>
        <td style={styles.td}>Casual investors</td>
      </tr>
      <tr>
        <td style={styles.td}><strong>Angel One</strong></td>
        <td style={styles.td}>₹0</td>
        <td style={styles.td}>₹0</td>
        <td style={styles.td}>₹20 (flat)</td>
        <td style={styles.td}>Angel One App</td>
        <td style={styles.td}>All traders</td>
      </tr>
      <tr>
        <td style={styles.td}><strong>ICICI Direct</strong></td>
        <td style={styles.td}>₹0–₹999</td>
        <td style={styles.td}>0.55%</td>
        <td style={styles.td}>0.25%</td>
        <td style={styles.td}>Trade Racer</td>
        <td style={styles.td}>Investors &amp; HNIs</td>
      </tr>
      <tr>
        <td style={styles.td}><strong>Groww</strong></td>
        <td style={styles.td}>₹0</td>
        <td style={styles.td}>₹0</td>
        <td style={styles.td}>₹20</td>
        <td style={styles.td}>Groww Web/App</td>
        <td style={styles.td}>Beginner investors</td>
      </tr>
    </>
  );
}

const styles = {
  main: {
    background:
      "linear-gradient(135deg, #f0f4ff 0%, #d9e4ff 100%)",
    minHeight: "100vh",
    padding: "4rem 1rem 2rem",
    fontFamily: "'Inter', sans-serif",
    color: "#1e293b",
  },
  header: {
    textAlign: "center" as const,
    marginBottom: "3rem",
  },
  branding: {
    marginBottom: "0.6rem",
  },
  logo: {
    backgroundColor: "#2563eb",
    padding: "8px 14px",
    borderRadius: "10px",
    fontSize: "1.1rem",
    fontWeight: 800,
    color: "#fff",
    display: "inline-block",
    letterSpacing: "2px",
  },
  title: {
    fontSize: "3rem",
    fontWeight: 900,
    color: "#1e40af",
    marginTop: "12px",
    lineHeight: 1.1,
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#475569",
    marginTop: "11px",
    maxWidth: "620px",
    marginLeft: "auto",
    marginRight: "auto",
    lineHeight: 1.4,
  },
  heroSection: {
    marginBottom: "3.8rem",
  },
  heroWrapper: {
    backgroundColor: "#fff",
    padding: "2rem 2.5rem",
    borderRadius: "16px",
    boxShadow: "0 12px 30px rgba(59, 130, 246, 0.15)",
    maxWidth: "700px",
    margin: "0 auto",
    textAlign: "center" as const,
  },
  heroTitle: {
    fontSize: "2.25rem",
    fontWeight: 700,
    color: "#1e293b",
  },
  heroText: {
    marginTop: "10px",
    fontSize: "1.05rem",
    color: "#475569",
    lineHeight: 1.5,
  },
  section: {
    marginBottom: "3.5rem",
  },
  sectionTitle: {
    textAlign: "center" as const,
    fontSize: "1.8rem",
    fontWeight: 800,
    color: "#1e40af",
    marginBottom: "1.8rem",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
  },
  card: {
    padding: "22px 20px 30px",
    borderRadius: "20px",
    backgroundColor: "#fff",
    transition: "transform 0.35s ease, box-shadow 0.35s ease",
    cursor: "pointer",
    boxShadow: "0 8px 18px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    textAlign: "center" as const,
  },
  cardLogo: {
    maxWidth: "110px",
    marginBottom: "15px",
  },
  cardTitle: {
    fontSize: "1.4rem",
    fontWeight: 900,
    color: "#1e40af",
    marginBottom: "14px",
  },
  bestTag: {
    display: "inline-block",
    fontSize: "0.8rem",
    fontWeight: 700,
    color: "#fff",
    backgroundColor: "#3b82f6",
    padding: "5px 12px",
    borderRadius: "24px",
    marginLeft: "10px",
  },
  cardFeatures: {
    listStyleType: "disc",
    paddingLeft: "22px",
    marginBottom: "22px",
    color: "#475569",
    fontSize: "0.95rem",
    textAlign: "left" as const,
    width: "100%",
  },
  cardFeatureItem: {
    marginBottom: "8px",
  },
  cardCTA: {
    padding: "14px 22px",
    backgroundColor: "#2563eb",
    borderRadius: "10px",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: 700,
    textDecoration: "none",
    boxShadow: "0 6px 18px rgba(59,130,246,0.5)",
    transition: "background-color 0.3s ease",
    width: "100%",
  },
  tableWrapper: {
    overflowX: "auto" as const,
    borderRadius: "12px",
    border: "1.5px solid #cbd5e1",
    backgroundColor: "#fff",
    boxShadow: "0 8px 24px rgba(59, 130, 246, 0.15)",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    minWidth: "650px",
  },
  th: {
    padding: "14px",
    backgroundColor: "#2563eb",
    color: "#fff",
    fontWeight: 700,
    textAlign: "center" as const,
    borderBottom: "3px solid #1e40af",
  },
  td: {
    padding: "14px 12px",
    borderBottom: "1.4px solid #e2e8f0",
    fontSize: "1rem",
    color: "#1e293b",
    textAlign: "center" as const,
  },
  primaryCTA: {
    display: "inline-block",
    padding: "16px 28px",
    backgroundColor: "#16a34a",
    borderRadius: "14px",
    color: "#fff",
    fontSize: "1.15rem",
    fontWeight: 700,
    textDecoration: "none",
    boxShadow: "0 8px 30px rgba(22, 163, 74, 0.5)",
    transition: "background-color 0.3s ease",
    cursor: "pointer",
  },
  footer: {
    textAlign: "center" as const,
    fontSize: "0.9rem",
    paddingTop: "1.3rem",
    color: "#64748b",
    borderTop: "1px solid #cbd5e1",
  },
};
