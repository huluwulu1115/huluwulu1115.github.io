---
layout: page
title: Towards Scalable Quadruped Imitation
description: ESE 6500 Learning in Robotics · University of Pennsylvania · Spring 2025
img: assets/img/12.jpg
importance: 3
category: Course
---

A course project on scalable quadruped motion imitation using only monocular animal videos—no motion capture or manual annotations. We reconstruct 3D animal motion, retarget it to a Unitree Go2, and train a reinforcement learning policy that reproduces agile, physically consistent gaits in simulation.

## Project Overview

This project builds a full pipeline from video to policy:

- **Learned skeleton from monocular videos**: Start with a SMAL-based template and optimize instance-specific skinning weights to recover articulated 3D motion from casual dog videos.
- **Inverse-kinematics retargeting**: Map animal keypoints to the Go2 morphology and solve for joint trajectories that preserve gait characteristics while respecting kinematics.
- **RL imitation with custom rewards**: Train in Genesis with reward terms for joint/velocity matching, base stability, straight-line progress, end-effector behavior, and front-leg activity; add domain randomization for robustness.
