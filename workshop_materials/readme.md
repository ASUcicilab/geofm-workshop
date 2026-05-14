# Environment Setup Guide for Hands-On Jupyter Notebook

### **Workshop:** Prithvi-EO-2.0 Workshop (Hands-On Session)

### **Repository:** [ASUcicilab/geofm-workshop](https://github.com/ASUcicilab/geofm-workshop)

---

## 🛠 Prerequisites

Before you begin, make sure the following tools are installed on your system:

* **Miniconda or Anaconda** — Required to manage the virtual environment.
  * [Miniconda (lightweight, recommended)](https://docs.conda.io/en/latest/miniconda.html)
  * [Anaconda (full distribution)](https://www.anaconda.com/download)

* **Git** — To clone the workshop repository: [https://git-scm.com/downloads](https://git-scm.com/downloads)

> 💡 **Tip:** To verify conda is installed correctly, run:
> ```bash
> conda --version
> 
> ``` 

---

## 📥 Step 1: Clone the GitHub Repository

Download the workshop materials by cloning the official repository:

```bash
# Clone the project
git clone https://github.com/ASUcicilab/geofm-workshop.git

# Enter the directory
cd geofm-workshop

```

---


## 🏗 Step 2: Create a Conda Virtual Environment

The GitHub repository provides a pre-configured `environment.yml` file. This file contains all the necessary libraries (dependencies) to ensure the code runs correctly without conflicting with your other Python projects.

Navigate to the cloned repository directory and run the following command:
```bash
conda env create -f environment.yml

```

*This creates an environment (usually named `geofm-env`) and installs all dependencies automatically.*

---


## 🚀 Step 3: Activate the Environment

Once the environment is created, you **must** activate it before proceeding:

```bash
conda activate geofm-env

```

> ⚠️ **Important:** Your terminal prompt should now show `(geofm-env)`. If you close the terminal, you must run this command again before working.

---


## 📓 Step 4: Launch Jupyter Notebook

With the environment activated and inside the `geofm-workshop` folder, start Jupyter:

```bash
jupyter notebook

```

* **Action:** A browser window will open. Navigate to the `notebooks/` folder and open the first hands-on notebook (e.g., `prithvi_workshop_final.ipynb`).
* **Troubleshooting:** If Jupyter is not installed, run:
```bash
pip install notebook

```

---

## ✏️ Step 5: Code Modifications Required

Before running the notebooks, update the configuration cells. Look for comments like `# TODO` or `# CHANGE THIS`.


### **5.1 Data Paths**

Update local file paths to match your directory structure:

```python
# TODO: Update this path to your local data folder
DATA_DIR = "/path/to/your/data"

```

### **5.2 Model Configuration Files**

If a pretrained model is required, point the notebook to the local file:

```python
CHECKPOINT_PATH = "/path/to/checkpoint.pth"

```

### **5.3 GPU / Device Configuration**

Verify your hardware detection:

```python
import torch
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
print(f"Using device: {device}")

```

*Note: If you are on CPU only, consider reducing batch sizes to maintain performance.*

---

## 📋 Quick Reference: Common Commands

| Task | Command |
| --- | --- |
| **Clone repository** | `git clone https://github.com/ASUcicilab/geofm-workshop.git` |
| **Create env from yml** | `conda env create -f environment.yml` |
| **Activate environment** | `conda activate geofm-env` |
| **Launch Jupyter** | `jupyter notebook` |

---

Last updated: May 2026
```

