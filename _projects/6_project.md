---
layout: page
title: <img src="/assets/img/logos/flashparking.png" alt="Flash Parking" style="height:1.2em; width:auto; object-fit:contain; vertical-align:middle; margin-right:8px;">Flash Parking&#58; Consumer Sentiment Analysis
description: Flash Parking · Industry-Sponsored · University of Michigan · 2023
img: assets/img/flash_parking/flash.jpg
importance: 6
category: Industry-Sponsored
---

This project, developed in collaboration with FLASH Parking and the University of Michigan MDP program, aims to build an automated system to measure customer satisfaction from kiosk interactions using **multimodal visual and audio data**.

**Note**: Unlike traditional academic research, this industry-sponsored project focused on creating a practical, deployable solution for FLASH Parking’s real-world needs. Our goal wasn’t to chase state-of-the-art benchmarks, but to design a system that works reliably within real operational constraints — from limited onboard computing power to deployment scalability. This experience taught us how to balance technical innovation with practicality, turning cutting-edge research ideas into something that can actually run in the field.

**Faculty Mentor**: [Dr. Kayvan Najarian](https://medicine.umich.edu/dept/computational-medicine-bioinformatics/kayvan-najarian-phd)

**Sponsor Mentors**: [Hunter Dunbar](https://www.linkedin.com/in/hunterdunbar/), [Edward Hunter](https://www.linkedin.com/in/edhunter/)

## System Architecture

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/flash_parking/system_diagram.png" title="System Pipeline Diagram" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    End-to-end multimodal sentiment analysis pipeline: from data collection to web application deployment
</div>

The system integrates three core components working in parallel:

1. **Object Detection** – Detects human faces and extracts relevant audio from kiosk video feeds
2. **Visual Sentiment Analysis** – Classifies facial expressions and emotional states
3. **Audio Sentiment Analysis** – Analyzes emotional tone in speech

**System Output**: Binary sentiment label (Positive/Negative) and a multimodal confidence score [0, 1]

---

## Methodology

#### Object Detection Module

Identifies customer faces from kiosk video feeds and triggers synchronized audio recording. Built using **YOLOv8** trained on a custom dataset of 3,500+ annotated images with data augmentation including rotation, shear, and grayscale conversion for lighting robustness. The model achieved **96.3% mAP** with 91.2% precision and 91.8% recall, producing cropped face images and audio files for downstream analysis.

#### Visual Sentiment Analysis

Classifies facial expressions using a **Vision Transformer (ViT)** pre-trained on ImageNet-21K and fine-tuned on the FER+ dataset (28,709 training images). The model significantly outperformed the legacy CNN approach, achieving **AUC of 0.937** compared to 0.76. A key innovation is **differential learning**, which analyzes emotional trends across video frames using regression slope analysis, enabling dynamic sentiment weighting based on temporal patterns rather than isolated snapshots.

#### Audio Sentiment Analysis

Analyzes emotional tone in customer speech using a **BiLSTM with attention mechanism**. The system first converts audio to text using speech recognition (**95.1% accuracy**), then the BiLSTM encoder captures bidirectional sentence context while the attention layer emphasizes emotionally significant words. Trained on the dair-ai/emotion dataset with emotions reclassified to binary (positive: joy, love, surprise; negative: anger, fear, sadness), the model achieved **89.2% accuracy** and **0.94 AUROC**.

---

## Results & Impact

The integrated multimodal system delivers reliable real-time customer satisfaction scores by combining face detection, visual sentiment analysis, and audio emotion recognition. The system processes live video feeds with face detection overlay, tracks emotional trends across time, and outputs continuous sentiment scores with confidence metrics. The containerized deployment package is ready for integration with FLASH Parking kiosk infrastructure.
