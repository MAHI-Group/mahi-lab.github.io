---
layout: page
title: Research
permalink: /research/
---

We do **AI for Science** — building machine intelligence that works alongside human reasoning
to accelerate scientific discovery. Our core conviction is that AI systems must go beyond
pattern recognition: they need to reason, explain, and collaborate with humans in the pursuit
of scientific knowledge. To that end, we develop methods that combine the scalability of modern
deep learning with the interpretability and structure of symbolic reasoning, and apply them to
hard open problems in computational biology and drug discovery.


### Neurosymbolic AI

Statistical learning and symbolic reasoning have complementary strengths.
Neural networks learn well from large, noisy data but are opaque and data-hungry.
Symbolic methods — such as Inductive Logic Programming (ILP) — are interpretable and
data-efficient but do not scale to raw data easily.
We build **neurosymbolic** methods that integrate both: neural networks guided by symbolic
domain knowledge, and symbolic engines that learn from neural representations.

Key contributions include Compositional Relational Machines (CRMs), knowledge-guided graph
neural networks (BotGNN, VEGNN), and methods for extracting interpretable rules from trained
networks. Applications span drug discovery, genomics, and other scientific domains where
both data and prior knowledge are available.


### Deep Learning

We work on foundational aspects of deep learning relevant to scientific applications:
sequence models and transformers for genomic data, model calibration and uncertainty
quantification, knowledge distillation, and explainability.
A recurring theme is **reliability** — predictions in science must come with well-calibrated
confidence and interpretable justification.

We also study large language models (LLMs) for scientific tasks, including using LLMs with
logical feedback for molecular design, and building genomic foundation models that capture
regulatory and codon-usage patterns across eukaryotes.


### Computational Biology and Drug Discovery

Biology is a natural domain for AI for Science: the data are vast, the problems are hard,
and mechanistic interpretability is essential. We work on:

- **Gene regulation** &mdash; predicting gene expression from DNA sequences to understand
  cis-regulatory logic (e.g. Camformer, *Bioinformatics Advances* 2025).
- **Genomic foundation models** &mdash; learning representations of codon usage and transcript
  stability from large-scale eukaryotic genomic datasets.
- **Multi-omics cancer analysis** &mdash; Boolean and ML methods for cancer biomarker discovery,
  macrophage polarisation, and single-cell transcriptomics.
- **Drug discovery** &mdash; neurosymbolic models for novel lead generation, molecular property
  prediction via GNNs, and explainable compound screening.


### Causality

Correlation-based models are brittle: they fail under distribution shift and cannot answer
interventional or counterfactual questions that science demands.
We are interested in **causal machine learning** — methods that go beyond associational
learning to discover and exploit causal structure in data.

This includes learning causal graphs from observational and interventional data, integrating
causal priors with deep learning, and using causal reasoning to improve robustness and
interpretability of models in biological and clinical settings.
A longer-term goal is to build AI systems that can reason about *why* a biological phenomenon
occurs, not just *that* it occurs — a prerequisite for trustworthy AI in science.


Most of our code is publicly available at the
[MAHI-Group GitHub organisation](https://github.com/MAHI-Group)
and [Tirtharaj's personal GitHub](https://github.com/tirtharajdash).