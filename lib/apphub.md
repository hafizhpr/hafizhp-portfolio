# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Industrial data pipeline for **Danfoss AppHub** (Azure-based PaaS).

Data flow: **PLC → MQTT → QuestDB → Grafana**

QuestDB serves as the time-series store and accepts data via the **InfluxDB line protocol** (port 9009), making it a drop-in replacement for InfluxDB in the pipeline.

## Dev Environment

There are two separate Docker environments:

1. **Shared dev-env** (MQTT broker, etc.) — must be started first:
   ```
   cd C:\Users\Hafiz\dev-env && docker compose up -d
   ```

2. **This project's services** (QuestDB + Grafana):
   ```
   docker compose up -d
   ```

## Services (docker-compose.yml)

| Service | Port | Purpose |
|---------|------|---------|
| QuestDB web console | 9000 | Query UI and admin |
| QuestDB InfluxDB line protocol | 9009 | Ingest data from Python scripts |
| QuestDB PostgreSQL wire | 8812 | SQL queries from Grafana |
| Grafana | 3001 | Dashboards (3001 to avoid conflict with dev-env Grafana on 3000) |

## Configuration

Copy `.env.example` to `.env` and fill in:
- `MQTT_HOST/PORT/TOPIC` — broker connection (topic: `danfoss/#`)
- `INFLUX_HOST/PORT/TOKEN/ORG/BUCKET` — QuestDB InfluxDB line protocol endpoint
- `PLC_HOST/PORT` — Modbus TCP connection (port 502)

## Repository Structure

- `src/` — Python scripts (data collectors, MQTT publishers, pipeline logic)
- `config/` — MQTT and InfluxDB/QuestDB configuration files
- `docs/` — Documentation
