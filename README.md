# ASU Workshop on Geospatial AI Foundation Models

Welcome to the hands-on materials for the ASU Workshop on Geospatial AI Foundation Models.

This workshop introduces geospatial foundation models for Earth observation and walks through a practical example using the NASA-IBM Prithvi model for landslide mapping from satellite imagery.

## Workshop Exercise

The main hands-on notebook is:

- `workshop_materials/prithvi_workshop_final.ipynb`

In this notebook, you will fine-tune a Prithvi geospatial foundation model for binary semantic segmentation:

- Input: Sentinel-2 optical bands, including Blue, Green, Red, NIR, SWIR-1, and SWIR-2
- Output: a landslide mask
- Model: Prithvi encoder with a UNet decoder
- Metrics: precision, recall, F1-score, and IoU

The notebook covers:

1. Exploring HDF5 satellite data
2. Building a custom PyTorch dataset
3. Computing channel-wise normalization statistics
4. Applying data augmentation and resizing for Prithvi input
5. Building a TerraTorch Prithvi + UNet segmentation model
6. Training, validation, checkpointing, and test evaluation
7. Visualizing predictions and error maps

## Files

- `workshop_materials/prithvi_workshop_final.ipynb`: main workshop notebook
- `workshop_materials/config_prithvi300_UNet.yaml`: model configuration for Prithvi-EO-2.0 300M with a UNet decoder
- `workshop_materials/readme.md`: short note for the workshop materials folder

## Data And Checkpoints

Participants should download the required landslide reference dataset and Prithvi checkpoint before running the model-building and training sections.

- Landslide reference dataset: https://zenodo.org/records/17007637
- Prithvi-EO-2.0 300M model files: https://huggingface.co/ibm-nasa-geospatial/Prithvi-EO-2.0-300M/tree/main
- Direct checkpoint download: https://huggingface.co/ibm-nasa-geospatial/Prithvi-EO-2.0-300M/resolve/main/Prithvi_EO_V2_300M.pt?download=true

When Jupyter is launched from `workshop_materials`, the notebook path setup cell defaults to:

- Data: `./data/reference_data`
- Prithvi checkpoint: `./checkpoints/Prithvi_EO_V2_300M.pt`
- Fine-tuned training output: `./prithvi_unet_landslide_best.pt`

These correspond to the repo paths `workshop_materials/data/reference_data`, `workshop_materials/checkpoints/Prithvi_EO_V2_300M.pt`, and `workshop_materials/prithvi_unet_landslide_best.pt`.

If you store the files somewhere else, update `DATA_DIR` and `BACKBONE_CKPT_PATH` in the notebook path setup cell. You do not need to edit `workshop_materials/config_prithvi300_UNet.yaml` for local paths.

## Python Environment

The notebook uses Python 3 with common geospatial and deep learning packages, including:

- `torch`
- `torchvision`
- `h5py`
- `numpy`
- `pandas`
- `matplotlib`
- `tqdm`
- `pyyaml`
- `terratorch`
- `segmentation_models_pytorch`

A CUDA-enabled GPU is recommended for training and evaluation.

## Suggested Workflow

1. Follow `workshop_materials/readme.md` to create the environment, download files, and launch Jupyter from `workshop_materials`.
2. Open `prithvi_workshop_final.ipynb`.
3. Run the notebook cells in order.
4. Confirm that `DATA_DIR` and `BACKBONE_CKPT_PATH` point to your downloaded files.
5. Follow the section notes in the notebook to inspect data, train the model, and visualize predictions.

## References

- TerraTorch: https://github.com/terrastackai/terratorch
- Prithvi-EO-2.0: https://github.com/NASA-IMPACT/Prithvi-EO-2.0
- Prithvi-EO-2.0 300M model card: https://huggingface.co/ibm-nasa-geospatial/Prithvi-EO-2.0-300M
