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

The notebook expects the workshop environment to provide shared data and model weights at these paths:

- Landslide reference data: `/data/shared/s1s2_landslide_reference_data/reference_data`
- Prithvi checkpoint: `/data/shared/prithvi_workshop/Prithvi_EO_V2_300M.pt`

If you are running outside the prepared workshop environment, update the paths in the notebook and in `workshop_materials/config_prithvi300_UNet.yaml` before running the model-building and training sections.

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

1. Open `workshop_materials/prithvi_workshop_final.ipynb`.
2. Run the notebook cells in order.
3. Confirm that the data directory and Prithvi checkpoint paths are available.
4. Follow the section notes in the notebook to inspect data, train the model, and visualize predictions.

## References

- TerraTorch: https://github.com/terrastackai/terratorch
- Prithvi-EO-2.0: https://github.com/NASA-IMPACT/Prithvi-EO-2.0
- Prithvi model card: https://huggingface.co/ibm-nasa-geospatial/Prithvi-100M
