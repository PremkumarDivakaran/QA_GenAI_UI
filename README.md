# QA-GenAI-UI

This project is a **React.js UI application** designed for **QA professionals** to utilize **LLM (Large Language Models) to solve problems**. This UI requires a **backend service** to function properly.

The backend service for this project is hosted separately on GitHub. You can find it here:
👉 [QA-GenAI-Backend](https://github.com/PremkumarDivakaran/QA_GenAI_Backend)

---
## **Getting Started**

### **1. Run Locally (Without Docker)**

#### **Prerequisites**
- Install [Node.js](https://nodejs.org/) (Recommended: LTS version)
- Install [VS Code](https://code.visualstudio.com/) (Optional, but recommended)
- Ensure the required **backend service** is running ([QA-GenAI-Backend](https://github.com/PremkumarDivakaran/QA_GenAI_Backend))

#### **Steps**
1. **Open the project in VS Code**
2. **Open a terminal** in VS Code and run the following commands:

   ```sh
   npm install  # Install dependencies
   npm install react-icons  # Install react-icons package
   npm start  # Start the development server
   ```

3. Open **http://localhost:3000** in your browser.
4. Ensure the **backend service** is running and accessible.

---

### **2. Run with Docker**

#### **Prerequisites**
- Install [Docker](https://www.docker.com/)
- Install [VS Code](https://code.visualstudio.com/) (Optional, but recommended)
- Ensure the required **backend service** is running ([QA-GenAI-Backend](https://github.com/PremkumarDivakaran/QA_GenAI_Backend))

#### **Steps**
1. **Open the project in VS Code**
2. **Open a terminal** and run the following commands:

   ```sh
   docker build -t qa-genai-ui .  # Build the Docker image
   docker run -d --name genai-ui -p 3000:3000 qa-genai-ui  # Run the container in detached mode
   ```

3. Open **http://localhost:3000** in your browser.
4. Ensure the **backend service** is running and accessible.

---

### **3. Useful Docker Commands**

#### **Check Running Containers**
```sh
docker ps
```

#### **Stop the Running Container**
```sh
docker stop genai-ui
```

#### **Restart the Container**
```sh
docker start genai-ui
```

#### **Remove the Container**
```sh
docker rm genai-ui
```

#### **Remove the Docker Image**
```sh
docker rmi qa-genai-ui
```

---

### **Backend Repository**
The backend service for this project is hosted at:
👉 [QA-GenAI-Backend](https://github.com/PremkumarDivakaran/QA_GenAI_Backend)

Make sure the backend is running before starting the UI.

---
