---
layout: page
title: Members
permalink: /members/
---

## Principal Investigator

{% for member in site.data.members.principal_investigator %}
<div style="display:flex; gap:1.2rem; align-items:flex-start; margin-bottom:1.5rem; padding:1rem; border:1px solid #e0e0e0; border-radius:6px;">
  <img src="{{ member.photo }}" alt="{{ member.name }}"
       style="width:90px; height:90px; border-radius:50%; object-fit:cover; flex-shrink:0;" />
  <div>
    <strong style="font-size:1.05rem;">{{ member.name }}</strong><br/>
    <span style="color:#555; font-size:0.9rem;">{{ member.role }}</span><br/><br/>
    <p style="font-size:0.9rem; margin:0 0 0.5rem;">{{ member.bio }}</p>
    <span style="font-size:0.85rem;">
      {% if member.website %}<a href="{{ member.website }}">[Website]</a> {% endif %}
      {% if member.scholar %}<a href="{{ member.scholar }}">[Google Scholar]</a> {% endif %}
      {% if member.github %}<a href="{{ member.github }}">[GitHub]</a> {% endif %}
      {% if member.cv %}<a href="{{ member.cv }}">[CV]</a> {% endif %}
    </span>
  </div>
</div>
{% endfor %}


## PhD Students

{% if site.data.members.phd_students.size > 0 %}
{% for member in site.data.members.phd_students %}
- **{{ member.name }}** — {{ member.bio }}
{% endfor %}
{% else %}
*None yet. [Opportunities available.](/opportunities)*
{% endif %}

## Postdoctoral Researchers

{% if site.data.members.postdocs.size > 0 %}
{% for member in site.data.members.postdocs %}
- **{{ member.name }}** — {{ member.bio }}
{% endfor %}
{% else %}
*None yet. [Opportunities available.](/opportunities)*
{% endif %}

## Project / Thesis Students

{% if site.data.members.project_students.size > 0 %}
{% for member in site.data.members.project_students %}
- **{{ member.name }}** — {{ member.bio }}
{% endfor %}
{% else %}
*None yet. [Opportunities available.](/opportunities)*
{% endif %}

## Alumni

{% if site.data.members.alumni.size > 0 %}
{% for member in site.data.members.alumni %}
- **{{ member.name }}** — {{ member.bio }}
{% endfor %}
{% else %}
*None yet.*
{% endif %}
