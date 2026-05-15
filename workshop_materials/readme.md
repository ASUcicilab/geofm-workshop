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
cd geofm-workshop/workshop_materials

```

---


## 🏗 Step 2: Create a Conda Virtual Environment

The GitHub repository provides a pre-configured `environment.yml` file. This file contains all the necessary libraries (dependencies) to ensure the code runs correctly without conflicting with your other Python projects.

Navigate to the cloned repository directory and run the following command:
```bash
conda env create -f environment.yml

```

*This creates an environment named `geofm-env` and installs all dependencies automatically.*

---


## 🚀 Step 3: Activate the Environment

Once the environment is created, you **must** activate it before proceeding:

```bash
conda activate geofm-env

```

> ⚠️ **Important:** Your terminal prompt should now show `(geofm-env)`. If you close the terminal, you must run this command again before working.

---


## 📓 Step 4: Launch Jupyter Notebook

With the environment activated and inside the `geofm-workshop/workshop_materials` folder, start Jupyter:

```bash
jupyter notebook

```

* **Action:** A browser window will open. Navigate to the current folder and open the hands-on notebook (e.g., `prithvi_workshop_final.ipynb`).
* **Troubleshooting:** If Jupyter is not installed, run:
```bash
pip install notebook

```

---


## ✏️ Step 5: Download Data, Download Checkpoint, And Configure Paths

Before running the model-building and training cells, download both the landslide dataset and the Prithvi checkpoint. Then update the path setup cell near the top of the notebook.


### **5.1 Download the Landslide Reference Dataset**

The data required for this workshop is hosted on Zenodo.
- Download link: [https://zenodo.org/records/17007637](https://zenodo.org/records/17007637)

After downloading, extract the HDF5 split files into a local folder. The notebook default expects:

```text
workshop_materials/data/reference_data/
```

This folder should contain files such as:

```text
train_n3_s1s2.h5
val_n3_s1s2.h5
testind_n3_s1s2.h5
```

### **5.2 Download the Prithvi Checkpoint**

The Prithvi-EO-2.0 300M checkpoint is hosted on Hugging Face.
- Model files page: [https://huggingface.co/ibm-nasa-geospatial/Prithvi-EO-2.0-300M/tree/main](https://huggingface.co/ibm-nasa-geospatial/Prithvi-EO-2.0-300M/tree/main)
- Direct checkpoint download: [Prithvi_EO_V2_300M.pt](https://huggingface.co/ibm-nasa-geospatial/Prithvi-EO-2.0-300M/resolve/main/Prithvi_EO_V2_300M.pt?download=true)

Save the checkpoint as:

```text
workshop_materials/checkpoints/Prithvi_EO_V2_300M.pt
```

If you are already inside `geofm-workshop/workshop_materials`, you can download it with:

```bash
mkdir -p checkpoints
curl -L -o checkpoints/Prithvi_EO_V2_300M.pt "https://huggingface.co/ibm-nasa-geospatial/Prithvi-EO-2.0-300M/resolve/main/Prithvi_EO_V2_300M.pt?download=true"
```

### **5.3 Notebook Paths**

Update local file paths to match your directory structure:

```python
# Change these if you saved the files somewhere else.
DATA_DIR = "./data/reference_data"
BACKBONE_CKPT_PATH = "./checkpoints/Prithvi_EO_V2_300M.pt"

```

The notebook injects `BACKBONE_CKPT_PATH` into the model configuration at runtime. For this workshop, keep it pointed at the downloaded checkpoint. You do not need to edit `config_prithvi300_UNet.yaml` for local paths.

During training, the best fine-tuned model is saved as:

```text
workshop_materials/prithvi_unet_landslide_best.pt
```

### **5.4 GPU / Device Configuration**

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
