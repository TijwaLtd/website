# Page-by-Page Audit of tailoredfood.org

This document outlines the layout, sections, components, and assets for each page of the tailoredfood.org website.

## Homepage (`/`)

### 1. Header
- **Component:** `Header`
- **Elements:**
    - Logo (left-aligned)
    - Navigation Menu (right-aligned):
        - About Us (dropdown)
        - Our Work (dropdown)
        - News
        - Contact
    - "Donate" Button (prominent)

### 2. Hero Section
- **Component:** `Hero`
- **Elements:**
    - Full-width background video.
    - Main Headline: "Food systems that are nutritious, delicious, affordable, and local."
    - Sub-headline and a short introductory paragraph.
    - "Learn More" Call-to-Action (CTA) Button.

### 3. "What We Do" Section
- **Component:** `FeatureSection`
- **Elements:**
    - Section Title: "What We Do"
    - Introductory paragraph.
    - Three feature cards, each with:
        - Icon
        - Title (e.g., "Partner with Entrepreneurs")
        - Description

### 4. "Our Impact" Section
- **Component:** `StatsSection`
- **Elements:**
    - Section Title: "Our Impact"
    - A collection of key statistics, each with:
        - A number/figure
        - A descriptive label (e.g., "countries," "people reached")

### 5. "Featured Project" Section
- **Component:** `Card` or `FeaturedContent`
- **Elements:**
    - Section Title: "Featured Project"
    - Horizontal card layout with:
        - Image on one side.
        - Text content on the other (Title, Description).
        - "Read More" CTA Button.

### 6. "News" Section
- **Component:** `CardGrid`
- **Elements:**
    - Section Title: "Latest News"
    - A grid of recent news articles, each displayed as a card with:
        - Image
        - Title
        - Date
        - "Read More" link/button.

### 7. "Join Us" / CTA Section
- **Component:** `CallToAction`
- **Elements:**
    - Catchy headline.
    - Short paragraph encouraging user action.
    - "Donate" or "Get Involved" CTA Button.

### 8. Footer
- **Component:** `Footer`
- **Elements:**
    - Logo and mission statement.
    - Multiple columns of links:
        - Navigation
        - Social Media Icons/Links
        - Contact Information
    - Copyright notice and privacy policy link.

## About Us Page (`/about`)

### 1. Header
- **Component:** `Header` (reusable)

### 2. Page Header
- **Component:** `PageHeader`
- **Elements:**
    - Title: "About Us"
    - Breadcrumb navigation.

### 3. Mission/Vision Section
- **Component:** `TextSection`
- **Elements:**
    - Headline stating the mission.
    - Detailed paragraphs about the organization's purpose and goals.

### 4. "Our Model" Section
- **Component:** `FeatureSection` or `Timeline`
- **Elements:**
    - Section Title: "Our Model"
    - A visual representation (like a timeline or diagram) of their process.
    - Steps with descriptions (e.g., "Anthropological Deep Dives," "Holistic Food System Design").

### 5. "Our Team" Section
- **Component:** `TeamGrid`
- **Elements:**
    - Section Title: "Our Team"
    - Grid of team members, each with:
        - Photo
        - Name
        - Title/Role

### 6. Footer
- **Component:** `Footer` (reusable)

## Our Work Page (`/our-work`)

### 1. Header
- **Component:** `Header` (reusable)

### 2. Page Header
- **Component:** `PageHeader`
- **Elements:**
    - Title: "Our Work"
    - Breadcrumb navigation.

### 3. Introduction Section
- **Component:** `TextSection`
- **Elements:**
    - Overview of their work and approach.

### 4. Projects Section
- **Component:** `CardGrid`
- **Elements:**
    - Section Title: "Projects"
    - Grid of project cards, each with:
        - Image
        - Title
        - Short Description
        - Link to project page.

### 5. Publications Section
- **Component:** `List` or `CardGrid`
- **Elements:**
    - Section Title: "Publications"
    - List of publications with titles, authors, and links.

### 6. Footer
- **Component:** `Footer` (reusable)

## News Page (`/news`)

### 1. Header
- **Component:** `Header` (reusable)

### 2. Page Header
- **Component:** `PageHeader`
- **Elements:**
    - Title: "News"
    - Breadcrumb navigation.

### 3. News Grid
- **Component:** `CardGrid`
- **Elements:**
    - A grid of news articles (similar to the homepage section but more extensive).
    - Pagination if there are many articles.

### 4. Footer
- **Component:** `Footer` (reusable)

## Contact Page (`/contact`)

### 1. Header
- **Component:** `Header` (reusable)

### 2. Page Header
- **Component:** `PageHeader`
- **Elements:**
    - Title: "Contact Us"
    - Breadcrumb navigation.

### 3. Contact Information
- **Component:** `ContactInfo`
- **Elements:**
    - Address
    - Email
    - Phone Number
    - Social media links.

### 4. Contact Form
- **Component:** `Form`
- **Elements:**
    - Name, Email, Subject, Message fields.
    - "Submit" button.

### 5. Map
- **Component:** `Map`
- **Elements:**
    - Embedded map showing the office location.

### 6. Footer
- **Component:** `Footer` (reusable)