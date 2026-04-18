---
layout: home
title: ""
---

<div style="display:flex; flex-direction:row; align-items:center; gap:1.5rem; margin-bottom:2rem; margin-top:0.5rem; flex-wrap:wrap;">
  <img src="/assets/lab_logo_cropped.png" alt="MAHI Lab logo" style="height:120px; width:auto; flex-shrink:0;" />
  <div>
    <h1 style="margin:0; font-size:2rem; line-height:1.2;">MAHI Lab</h1>
    <p style="margin:0.2rem 0 0; font-size:1rem; font-weight:500;">
      Machine-and-Human Intelligence Lab
    </p>
    <p style="margin:0.2rem 0 0; font-size:0.88rem; color:#777;">
      BITS Pilani, K K Birla Goa Campus, India
    </p>
  </div>
</div>


## Who we are and What we do

We are a research group. We do **AI for Science** — building machine intelligence that works
alongside human reasoning to accelerate scientific discovery. Our core conviction is that AI
systems must go beyond pattern recognition: they need to reason, explain, and collaborate with
humans in the pursuit of scientific knowledge.


## Research Themes

**Neurosymbolic AI**: We integrate deep neural networks with symbolic methods such as
Inductive Logic Programming to build models that are accurate, interpretable, and data-efficient.

**Deep Learning**: We work on sequence models, transformers, LLMs, uncertainty
quantification, and explainability, with a focus on reliability for scientific applications.

**Computational Biology and Drug Discovery**: We apply AI to gene regulation, genomic
foundation models, multi-omics cancer analysis, and early-stage drug design.

**Causality**: We develop causal machine learning methods that go beyond correlation
to discover causal structure in biological and clinical data.

[Read more about our research &rarr;](/research)


## News

<ul>
{% for item in site.data.news %}
  <li>
    <strong>{{ item.date }}</strong> &mdash; {{ item.text }}
    {% if item.link %}<a href="{{ item.link }}">{{ item.link_text }}</a>{% endif %}
  </li>
{% endfor %}
</ul>
