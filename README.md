# DocuChat

DocuChat is an AI-powered web application that allows users to upload PDF documents and interact with them through natural language. Ask questions, get summaries, and extract insights instantly using OpenRouter's Mistral 7B language model.

## Features

- Upload any PDF and extract its content
- Ask questions about the document using plain English
- Get fast, AI-generated answers
- Built with a modern tech stack and polished UI

## Demo

Check [Demo](demo)

## Tech Stack

| Frontend                   | Backend           | AI Model                    |
| -------------------------- | ----------------- | --------------------------- |
| React + Vite + TailwindCSS | Node.js + Express | OpenRouter API (Mistral 7B) |

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/docuchat.git
cd docuchat
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a .env file in the backend directory:
`OPENROUTER_API_KEY=your_openrouter_key_here`

Start the backend server:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

The app will be available at http://localhost:5173

## Usage

Upload a PDF file

Ask a question about its contents

View the AI-generated response in real time

### API Key

You will need an API key from OpenRouter. The application uses the mistralai/mistral-7b-instruct model by default. You can change this in aiService.js.
