# Service Data Structure Documentation

## Overview
This document describes the JSON structure used for dynamically rendering service pages. The content is stored in the `serviceData` object in the page component.

## Four Services
1. **consult** - Consulting & Advisory
2. **social-intel** - Social Media Intelligence  
3. **geospatial** - Geospatial & Cellular Forensics
4. **brand-defense** - Brand Defense

## Complete JSON Structure

Each service follows this structure:

```typescript
{
  serviceName: {
    // Top Banner Section
    topBanner: {
      heading: {
        id: number,
        text: string  // Main hero heading
      },
      description: {
        id: number,
        list: string[]  // Array of description paragraphs
      },
      primaryButton: {
        id: number,
        text: string  // CTA button text
      },
      secondaryButton: {
        id: number,
        text: string  // Secondary CTA button text
      }
    },
    
    // Why Section (3 scrolling items)
    whySection: {
      title: string,  // Section heading
      items: [
        {
          text: string,  // Benefit description
          img: string    // Image path (e.g., "/services1.png")
        },
        // ... 3 items total
      ]
    },
    
    // Core Principals Section (3 expandable cards)
    corePrincipals: {
      title: string,  // Main section title
      
      customSeminars: {
        title: string,       // Card title
        description: string, // Card description
        benefits: string[]   // Array of 4 bullet points
      },
      
      investigativeServices: {
        title: string,
        description: string,
        benefits: string[]
      },
      
      continuingEducation: {
        title: string,
        description: string,
        benefits: string[]
      }
    },
    
    // Bottom CTA Card
    blurCard: {
      title: string,       // CTA heading
      description: string, // CTA description
      buttonText: string   // Button text
    }
  }
}
```

## Example: Consulting & Advisory

```json
{
  "consult": {
    "topBanner": {
      "heading": {
        "id": 1,
        "text": "Transform Complex Data Into Your Strategic Advantage"
      },
      "description": {
        "id": 2,
        "list": [
          "Navigate digital risks and uncover hidden opportunities to protect yourself, your company, and your employees"
        ]
      },
      "primaryButton": {
        "id": 3,
        "text": "Start Investigating"
      },
      "secondaryButton": {
        "id": 4,
        "text": "Book a Consultation"
      }
    },
    "whySection": {
      "title": "Why Consulting & Advisory?",
      "items": [
        {
          "text": "Leverage advanced intelligence techniques and unique data sources to enhance security, prevent fraud, and inform critical decisions",
          "img": "/services1.png"
        },
        {
          "text": "Unlock actionable insights and secure your future",
          "img": "/services3.png"
        },
        {
          "text": "Take command of your own destiny – build robust risk management frameworks, optimize investigative processes, and achieve a decisive competitive edge in today's dynamic landscape",
          "img": "/services2.png"
        }
      ]
    },
    "corePrincipals": {
      "title": "Core Pillars of Consulting & Advisory",
      "customSeminars": {
        "title": "Custom Seminars",
        "description": "Tailored seminars to equip your team with the skills to detect and mitigate intelligence threats.",
        "benefits": [
          "Fraud case studies and prevention strategies",
          "Practical checklists and roadmaps",
          "Insights into evolving intelligence threats",
          "Sector-specific fraud use cases"
        ]
      },
      "investigativeServices": {
        "title": "Investigative Services Support",
        "description": "Our team extends your investigative capabilities with investigator-led support.",
        "benefits": [
          "Uncover hidden connections and threats",
          "Validate evidence with digital forensics",
          "Deliver courtroom-ready reports",
          "Support or augment your existing investigations"
        ]
      },
      "continuingEducation": {
        "title": "Continuing Education",
        "description": "We offer accredited CE courses to ensure professionals are always prepared.",
        "benefits": [
          "Stay ahead of evolving cyber and fraud tactics",
          "Enhance professional skills and credentials",
          "Learn through real-world case studies",
          "Meet compliance and accreditation requirements"
        ]
      }
    },
    "blurCard": {
      "title": "Take Command of Your Future.",
      "description": "With Cyphr's Consulting & Advisory services, you'll gain the knowledge, tools, and strategies to act decisively in an unpredictable world.",
      "buttonText": "Book a Consultation"
    }
  }
}
```

## How to Edit Content

### Location
The content is defined in: `src/app/pages/services/[slug]/page.tsx`

### To Update Existing Content
1. Find the service key (`consult`, `social-intel`, `geospatial`, or `brand-defense`)
2. Navigate to the section you want to edit
3. Update the text values
4. Save the file - changes will reflect immediately

### To Add a New Service
1. Add a new key to the `serviceData` object
2. Follow the structure above
3. Update the `metadataMap` with SEO metadata
4. Add the slug to the `getCurrentServiceData()` switch statement

## Component Mapping

- **TopBanner** → `topBanner` data
- **WhyConsulting** → `whySection` data
- **CorePrincipals** → `corePrincipals` data
- **ServiceBlurCard** → `blurCard` data
- **VideoSection** → Uses static props (not dynamic yet)

## Notes

- All components have fallback default values if data is not provided
- The UI structure remains unchanged - only content is dynamic
- Images should be placed in the `/public` folder
- Each benefit list should have exactly 4 items for consistent UI
- The `whySection.items` array should have exactly 3 items
