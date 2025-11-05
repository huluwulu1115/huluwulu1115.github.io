---
layout: page
title: Towards Scalable Quadruped Imitation
description: ESE 6500 Learning in Robotics · University of Pennsylvania · Spring 2025
img: assets/video/quadruped_imitation.gif
importance: 3
category: Course
---

This project demonstrates teaching quadruped robots complex gaits by learning from **in-the-wild animal videos**—no motion capture, annotations, or controlled environments needed. Our pipeline transforms monocular dog videos into robust gaits for the Unitree Go2 robot by combining 3D pose estimation, inverse kinematics retargeting, and reinforcement learning (PPO). The system successfully reproduces diverse gaits (pace, trot, canter) across multiple dog breeds, with policies converging efficiently in ~500 iterations (**⚡ ~20 minutes on RTX 4070**).

## Methodology

**3D Pose Estimation**: Extract 3D skeletal motion from **monocular videos** using the SMAL model (parametric dog shape prior) and learned skinning weights for anatomically plausible articulation. Outputs frame-by-frame joint positions and orientations.

**Motion Retargeting**: Map animal skeleton to robot morphology via **inverse kinematics optimization**, ensuring joint limits and physical feasibility. Outputs feasible joint angle trajectories for Unitree Go2.

**Reinforcement Learning Policy**: Train a PPO controller in Genesis simulator to reproduce retargeted motions robustly. Reward function balances imitation accuracy, stability, and energy efficiency. Converges in ~500 iterations (~20 minutes on RTX 4070).

---

## Results

**Pose Estimation & Retargeting**: Successfully processes videos across multiple dog breeds (Shiba Inu, Pit Bull, German Shepherd), producing coherent 3D meshes despite variations in size, video quality, and backgrounds. Retargeted gaits (pace, trot, canter) transfer smoothly to PyBullet and Genesis simulators, maintaining characteristic rhythms. Manual calibration still needed for optimal results.

**Learned Behaviors**: RL policies exhibit realistic gaits with proper phase relationships (canter front-leg lift, distinct pace vs. trot patterns), robust balance, and natural weight distribution. Training converges efficiently in ~500 iterations with early reward plateau indicating sample efficiency.

---

## Future Work

Zero-shot retargeting without manual calibration · Sim-to-real transfer to physical robot · Complex behaviors (jumping, turning) · Cross-species generalization

---

## Full Report

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        <object data="{{ '/assets/pdf/Towards_Scalable_Quadruped_Imitation.pdf' | relative_url }}" type="application/pdf" width="100%" height="500px">
            <p>
                Your browser does not support PDFs. 
                <a href="{{ '/assets/pdf/Towards_Scalable_Quadruped_Imitation.pdf' | relative_url }}">Download the PDF</a> to view the full report.
            </p>
        </object>
    </div>
</div>