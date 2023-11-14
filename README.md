# Puppeteer Starter Template

<div align="center">
  <img src="https://github.com/CarlosUlisesOchoa/puppeteer-template/assets/26280134/5931ef7f-40fe-44ef-849a-ecc06f6b7320" alt="Project Icon" width="100">
</div>

## Table of Contents
1. [Description](#description)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Configuration](#configuration)
6. [Usage](#usage)
7. [Project Structure](#project-structure)
8. [About Developer](#about-developer)

## Description

`puppeteer-template` is a Node.js-based web scraping application template, that uses Puppeteer and additional plugins for stealth operations and ad-blocking.

## Features

- Headless browsing with Puppeteer.
- Stealth and ad-blocking capabilities.
- Customizable timeout and credential settings.
- Structured navigation and data processing actions.

## Prerequisites

Before installing, ensure you have:

- Node.js installed.
- A package manager like npm or pnpm.

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/CarlosUlisesOchoa/puppeteer-template.git
cd puppeteer-template
pnpm install
```

## Configuration

1. **Environment Variables:** Rename `.env.example` to `.env` and update the variables.
   
    - `DOMAIN` - The domain for your target site.
    - `INVISIBLE_BROWSER` - Toggle for headless browsing (`true` or `false`).
    - `CREDENTIALS_FILE` - Credentials file.
    - `DEFAULT_TIMEOUT` - Timeout setting for operations.

2. **Credentials:** Update `credentials.example.json` with the actual login credentials and rename it to `credentials.json`.

## Usage

Run the script with the following command:

```bash
node index.js
```

This will initiate the scraping process based on the configurations set in `.env` and `credentials.json`.

## Project Structure

- `config.js` - Central configuration file importing environment variables.
- `urls.js` - Contains URLs used for navigation.
- `pageActions` - Directory containing scripts for specific page interactions.
- `services` - Contains services like `loginService.js` for handling login.
- `utils` - Utility scripts like `logger.js` and `delay.js`.

## About Developer

Visit my web [Carlos Ochoa](https://carlos8a.com)

