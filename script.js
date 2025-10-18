function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Project Filtering Functionality
function filterProjects(category) {
    const projects = document.querySelectorAll('[data-category]');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    
    // Find and activate the clicked button
    const activeBtn = Array.from(filterButtons).find(btn => 
        btn.textContent.toLowerCase().includes(category === 'ai' ? 'ai/ml' : 
                                               category === 'fullstack' ? 'full-stack' : 
                                               category === 'medical' ? 'medical' : 'all')
    );
    if (activeBtn) activeBtn.classList.add('active');
    
    projects.forEach(project => {
        const projectCategories = project.dataset.category.split(' ');
        
        if (category === 'all' || projectCategories.includes(category)) {
            project.classList.remove('hidden');
            project.style.display = 'block';
        } else {
            project.classList.add('hidden');
            setTimeout(() => {
                if (project.classList.contains('hidden')) {
                    project.style.display = 'none';
                }
            }, 300);
        }
    });
}

// Project Modal Functionality
const projectData = {
    stroke: {
        title: "Acute Stroke Detection using Variational Autoencoders (VAE)",
        description: "AI-Powered Stroke Detection through Facial Symmetry Reconstruction - A deep learning project that leverages Variational Autoencoders (VAEs) to analyze facial symmetry and simulate drooping symptoms commonly associated with acute stroke.",
        details: [
            "Built a Variational Autoencoder (VAE) from scratch in PyTorch to learn compressed face representations and reconstruct facial structures",
            "Designed a facial alignment pipeline using Mediapipe and OpenCV to normalize unaligned facial images via landmark-based affine transformations",
            "Addressed dataset imbalance by implementing a weighted VAE loss function, ensuring equal learning focus on minority (stroke) samples",
            "Enhanced model stability with Batch Normalization, learning rate scheduling, and extended training epochs for better convergence",
            "Conducted latent space exploration to isolate features controlling facial asymmetry, supporting potential discovery of 'stroke symptom' vectors",
            "Developed a comprehensive evaluation system featuring confusion matrices, ROC curves, and visual reconstructions of latent traversal results",
            "Integrated automated visual monitoring for real-time tracking of reconstruction and generation quality during training",
            "Successfully aligned and preprocessed over 3,700 facial images with varying poses and lighting conditions"
        ],
        technologies: ["PyTorch", "NumPy", "Scikit-learn", "OpenCV", "Mediapipe", "Matplotlib", "Pillow"],
        achievements: [
            "Implemented a complete end-to-end VAE training and evaluation pipeline",
            "Preprocessed over 3,700 facial images with varying poses and lighting",
            "Reduced reconstruction noise through custom loss weighting and hyperparameter tuning",
            "Established robust workflow for synthetic stroke-symptom generation"
        ],
        impact: "Demonstrates how unsupervised learning can capture and visualize facial asymmetries, paving the way for future AI-assisted stroke detection tools in medical imaging diagnostics."
    },
    foodfact: {
        title: "Food Fact Generator - GPT-2 Based Food Intelligence System",
        description: "An advanced language generation model fine-tuned on the OpenFoodFacts dataset to generate natural-language food descriptions, including nutritional content, categories, Nutri-Score ratings, and geographic availability.",
        details: [
            "Fine-tuned GPT-2 (117M parameters) on over 990K products from the OpenFoodFacts dataset for domain-specific food description generation",
            "Built a robust preprocessing pipeline for cleaning, normalizing, and mapping nutritional data with ISO country codes",
            "Implemented comprehensive nutritional analysis (energy, protein, fat, carbohydrates, sugar, and salt)",
            "Designed country and category mapping modules for rich contextual food fact output",
            "Developed a fully automated training pipeline with validation, early stopping, cosine learning rate scheduling, and detailed metrics tracking",
            "Integrated sample generation interface for rapid model evaluation and testing",
            "Deployed API-ready model structure with checkpoint saving, metrics logging, and production-grade error handling",
            "Processed and fine-tuned GPT-2 on ~1 million global food entries for multilingual and multi-country generalization"
        ],
        technologies: ["PyTorch", "Hugging Face Transformers", "Pandas", "NumPy", "Scikit-learn", "KaggleHub", "OpenFoodFacts Dataset"],
        achievements: [
            "Processed ~1 million global food entries for generalization",
            "Reduced preprocessing time by 40% through optimized TSV parsing",
            "Achieved high factual coherence in generated food descriptions",
            "Built scalable and reproducible training workflow compatible with CUDA-enabled GPUs"
        ],
        impact: "Transforms nutritional data interpretation by converting structured datasets into fluent, AI-generated explanations. Enables researchers, developers, and health organizations to communicate food insights through natural language at scale."
    },
    medequip: {
        title: "MedEquip - Medical Equipment Maintenance Management System",
        description: "A full-stack maintenance management platform built for healthcare institutions to streamline medical equipment tracking, predictive maintenance, and cost analysis. MedEquip transforms fragmented maintenance workflows into a unified system that maximizes uptime, minimizes costs, and extends equipment lifespan.",
        details: [
            "Centralized Equipment Registry - Unified database for all medical assets with specifications, maintenance history, and real-time operational status",
            "Predictive Maintenance Engine - Data-driven scheduling based on equipment age, usage, and historical repair trends to prevent breakdowns",
            "Work Order & Task Management - Streamlined creation, assignment, and mobile tracking of maintenance activities",
            "Parts & Inventory Module - Live stock tracking, reorder alerts, and procurement recommendations for spare parts",
            "Financial Analytics Dashboard - Provides TCO, ROI, and maintenance cost insights across departments and vendors",
            "Real-Time Executive Dashboard - Visualizes KPIs including uptime, maintenance compliance, MTBF, MTTR, and budget utilization",
            "Smart Alerts & Notifications - Automated triggers for maintenance due, failures, or low inventory thresholds",
            "Secure Role-Based Access Control - Distinct manager and technician interfaces with Supabase's row-level security enforcement"
        ],
        technologies: ["React 18", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Auth", "Lucide React", "Vite", "React Router v7"],
        achievements: [
            "Architected end-to-end asset maintenance system with real-time dashboards",
            "Reduced manual maintenance tracking time by over 50%",
            "Designed Supabase-backed analytics views for automatic uptime and cost summaries",
            "Implemented full database security model with audit logging and role-based access"
        ],
        impact: "Empowering small-to-medium healthcare institutions to manage equipment more efficiently, MedEquip transforms reactive maintenance into a predictive and data-driven process—improving operational reliability, reducing downtime, and enhancing patient safety."
    },
    stats: {
        title: "Statistical Analysis & Visualization Platform - Global Poverty Research Lab",
        description: "A cloud-based analytics and visualization system designed for large-scale socioeconomic data analysis. The platform supports real-time insights for policy researchers working with the Ghana Socioeconomic Panel Survey, streamlining data processing, model deployment, and decision reporting.",
        details: [
            "AWS-Based Infrastructure: Designed and deployed a scalable analytics environment using EC2, S3, Lambda, and RDS to process survey data from 2,000+ participants",
            "Automated ETL Pipelines: Built ingestion and transformation workflows for cleaning and merging multi-year survey datasets",
            "Real-Time Dashboards: Developed dynamic dashboards using Plotly Dash and AWS QuickSight for immediate visualization of key economic and demographic indicators",
            "Ensemble Model Deployment: Integrated Random Forest, XGBoost, and Gradient Boosting models into AWS SageMaker for real-time inference",
            "Auto-Scaling & Optimization: Implemented EC2 auto-scaling groups and Lambda triggers to reduce compute cost and enable parallelized batch processing",
            "Collaborative Data Access: Enabled authenticated researcher access via secure IAM policies and controlled database endpoints"
        ],
        technologies: ["AWS EC2", "S3", "Lambda", "RDS", "SageMaker", "QuickSight", "Python", "Pandas", "NumPy", "Scikit-learn", "Plotly Dash", "SQL", "Docker", "GitHub Actions"],
        achievements: [
            "Reduced data analysis turnaround time from weeks to hours",
            "Established reproducible, cloud-native research workflow",
            "Improved data quality through automated cleaning and schema validation",
            "Delivered interactive visualization tools for real-time metric comparison"
        ],
        impact: "Provided the Global Poverty Research Lab with a sustainable, high-performance data analysis platform—transforming static, manual workflows into scalable, cloud-automated analytics that inform evidence-based policy interventions in Ghana."
    },
    ctrecon: {
        title: "Low-Dose CT Image Reconstruction - Deep Learning Project",
        description: "A deep learning-based medical imaging project focused on reconstructing high-quality CT images from low-dose scans. The system leverages convolutional neural networks to enhance diagnostic image clarity while minimizing radiation exposure for patients.",
        details: [
            "U-Net Architecture: Implemented and trained a U-Net model for low-dose CT image denoising and reconstruction using the MICCAI dataset",
            "GPU-Based Training Pipeline: Configured an AWS EC2 GPU instance with CUDA-enabled environment for high-performance model training",
            "Data Preprocessing: Normalized CT scans to [0,1] range, extracted 256×256 patches, and simulated sparse-view artifacts with TorchRadon",
            "Training & Evaluation: Trained models on augmented datasets and evaluated using PSNR, SSIM, and MSE metrics to measure reconstruction fidelity",
            "Reproducibility & Configuration Management: Automated environment setup, model saving, and logging for consistent experimentation"
        ],
        technologies: ["AWS EC2", "CUDA-enabled GPU", "Python", "PyTorch", "TorchRadon", "NumPy", "Matplotlib", "Jupyter Notebook", "Linux Ubuntu"],
        achievements: [
            "Achieved high-fidelity reconstruction of low-dose CT scans preserving anatomical detail",
            "Demonstrated significant noise reduction and improved structural similarity",
            "Built reproducible, GPU-accelerated deep learning workflow",
            "Reduced radiation exposure while maintaining clinical image quality"
        ],
        impact: "Enabled safer and more efficient medical imaging by reducing radiation exposure while maintaining clinical image quality—supporting the broader goal of advancing AI-assisted radiology through robust image reconstruction techniques."
    },
    northwestern: {
        title: "AI Faculty Training Program - Northwestern University",
        description: "Led the development of cutting-edge generative AI curriculum and hands-on workshops for over 100 educators across Northwestern University.",
        details: [
            "Developed comprehensive AI curriculum covering latest generative AI technologies",
            "Created hands-on technical workshops tailored for academic faculty",
            "Coordinated between university administration and faculty for seamless implementation",
            "Designed adaptive learning materials for diverse academic departments",
            "Established AI proficiency assessment frameworks",
            "Mentored faculty in practical AI tool implementation"
        ],
        technologies: ["Generative AI", "Curriculum Design", "Workshop Development", "Educational Technology", "Faculty Training"],
        achievements: [
            "75% improvement in faculty AI tool proficiency",
            "100+ educators trained across departments",
            "Selected as lead graduate assistant",
            "Cross-departmental AI integration"
        ],
        impact: "Empowered academic faculty with AI literacy, driving innovation across multiple university departments and improving educational outcomes."
    },
    church: {
        title: "Church Management System - First Love Church",
        description: "Comprehensive full-stack application designed to streamline church operations and improve pastoral care efficiency through modern technology.",
        details: [
            "Constructed complete system in just 3 weeks using AI coding agents",
            "Architected scalable backend infrastructure with automated CI/CD pipeline",
            "Implemented custom API endpoints for complex church operations",
            "Integrated Neo4j graph database for managing complex relationships",
            "Developed member attendance tracking system",
            "Created automated email notification workflows",
            "Built leadership dashboard for targeted member assistance programs"
        ],
        technologies: ["Full-Stack Development", "Neo4j", "Git Actions", "CI/CD", "Email Automation", "AI Coding Agents", "Bolt", "Cursor"],
        achievements: [
            "Complete system delivered in 3 weeks",
            "1000+ church members managed",
            "40% improvement in pastoral care efficiency",
            "Automated operational workflows"
        ],
        impact: "Transformed church operations by automating administrative tasks and enabling data-driven pastoral care decisions."
    },
    drug: {
        title: "Drug-Target Interaction Prediction using Machine Learning",
        description: "Advanced machine learning pipeline for predicting drug-target interactions to accelerate pharmaceutical drug discovery processes.",
        details: [
            "Created ensemble machine learning models using Random Forest and XGBoost",
            "Processed molecular fingerprints extracted from SMILES notation",
            "Analyzed 20,000 chemical compounds and protein expressions",
            "Built reproducible data science pipeline with comprehensive documentation",
            "Developed feature engineering techniques for molecular data",
            "Implemented model training and performance evaluation frameworks",
            "Created Django API for model deployment and accessibility"
        ],
        technologies: ["Random Forest", "XGBoost", "SMILES", "Molecular Fingerprints", "Django API", "Jupyter Notebooks", "Feature Engineering", "Model Evaluation"],
        achievements: [
            "100% optimization of drug discovery processes",
            "20,000 compounds processed",
            "Reproducible ML pipeline created",
            "Open-source accessibility via GitHub"
        ],
        impact: "Accelerating pharmaceutical research by providing accurate drug-target interaction predictions, potentially reducing drug discovery timelines."
    },
    oware: {
        title: "Oware RL Agent - Deep Q-Networks",
        description: "Reinforcement learning agent using Deep Q-Networks to master the traditional African board game Oware through self-play and advanced RL techniques.",
        details: [
            "Implemented Deep Q-Network (DQN) architecture for game strategy learning",
            "Developed custom game environment with PyTorch integration",
            "Created experience replay buffer for efficient training",
            "Implemented epsilon-greedy exploration strategy",
            "Built self-play training loop for continuous improvement",
            "Designed reward shaping mechanism for optimal gameplay",
            "Evaluated agent performance against rule-based opponents"
        ],
        technologies: ["Deep Q-Networks", "PyTorch", "Reinforcement Learning", "Game AI", "Python", "OpenAI Gym"],
        achievements: [
            "Successfully trained agent to play Oware competitively",
            "Demonstrated learning through self-play",
            "Built complete RL training pipeline",
            "Preserved traditional African game through AI research"
        ],
        impact: "Showcasing the application of modern reinforcement learning techniques to traditional games, bridging cultural heritage with cutting-edge AI research."
    },
    irc: {
        title: "IRC Learning Companion ChatBot",
        description: "Advanced document processing pipeline with hybrid RAG system achieving exceptional information retrieval accuracy for educational support.",
        details: [
            "Developed hybrid RAG (Retrieval-Augmented Generation) architecture",
            "Implemented document chunking and embedding pipeline",
            "Integrated vector database for efficient semantic search",
            "Built context-aware response generation system",
            "Created multi-turn conversation management",
            "Deployed on Telegram platform for accessibility",
            "Implemented query optimization for improved relevance"
        ],
        technologies: ["RAG Systems", "NLP", "Vector Databases", "Telegram Bot API", "Python", "LangChain", "Embeddings"],
        achievements: [
            "93% information retrieval accuracy",
            "67% improvement in answer relevance",
            "Real-time response generation",
            "Active deployment on Telegram"
        ],
        impact: "Providing students with instant, accurate educational support through advanced AI-powered conversational assistance."
    },
    medical: {
        title: "Medical Eye Disease Classifier",
        description: "Computer vision model for automated eye disease classification using deep learning techniques to support medical diagnosis.",
        details: [
            "Trained CNN model for multi-class eye disease classification",
            "Processed and augmented medical imaging datasets",
            "Implemented transfer learning with pre-trained models",
            "Developed data preprocessing pipeline for medical images",
            "Created model evaluation framework with medical metrics",
            "Built inference pipeline for real-time predictions",
            "Implemented visualization tools for model interpretability"
        ],
        technologies: ["Computer Vision", "CNNs", "TensorFlow", "Medical Imaging", "Transfer Learning", "Python", "Data Augmentation"],
        achievements: [
            "High accuracy in disease classification",
            "Robust performance across different eye conditions",
            "Efficient inference pipeline",
            "Interpretable model predictions"
        ],
        impact: "Supporting healthcare professionals with AI-assisted diagnosis tools to improve early detection of eye diseases and patient outcomes."
    },
    researchai: {
        title: "Research Paper AI Assistant",
        description: "AI-powered tool for research paper analysis, summarization, and knowledge extraction to accelerate academic research workflows.",
        details: [
            "Developed PDF parsing and text extraction pipeline",
            "Implemented abstractive summarization using transformer models",
            "Built key information extraction system",
            "Created citation network analysis tools",
            "Designed intuitive user interface for researchers",
            "Integrated multiple NLP models for comprehensive analysis",
            "Implemented batch processing for multiple papers"
        ],
        technologies: ["NLP", "Transformers", "Summarization", "Information Extraction", "Python", "PyTorch", "Streamlit"],
        achievements: [
            "Reduced paper review time by 60%",
            "Accurate extraction of key findings",
            "Support for multiple paper formats",
            "User-friendly research interface"
        ],
        impact: "Accelerating academic research by automating the time-consuming process of literature review and paper analysis."
    }
};

function openProjectModal(projectKey) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const project = projectData[projectKey];
    
    if (!project) return;
    
    modalBody.innerHTML = `
        <h2>${project.title}</h2>
        <p style="font-size: 1.1rem; margin-bottom: 1.5rem; line-height: 1.6;">${project.description}</p>
        
        <h3 style="color: rgb(53, 53, 53); margin: 1.5rem 0 1rem 0;">Key Features & Implementation</h3>
        <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            ${project.details.map(detail => `<li>${detail}</li>`).join('')}
        </ul>
        
        <h3 style="color: rgb(53, 53, 53); margin: 1.5rem 0 1rem 0;">Technologies Used</h3>
        <div class="project-stats" style="margin-bottom: 1.5rem;">
            ${project.technologies.map(tech => `<span class="stat-badge">${tech}</span>`).join('')}
        </div>
        
        <h3 style="color: rgb(53, 53, 53); margin: 1.5rem 0 1rem 0;">Key Achievements</h3>
        <ul style="line-height: 1.8; margin-bottom: 1.5rem;">
            ${project.achievements.map(achievement => `<li><strong>${achievement}</strong></li>`).join('')}
        </ul>
        
        <div style="background: rgb(240, 248, 255); padding: 1.5rem; border-radius: 1rem; margin-top: 2rem;">
            <h4 style="color: rgb(53, 53, 53); margin-bottom: 0.5rem;">Impact</h4>
            <p style="margin: 0; font-style: italic;">${project.impact}</p>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target === modal) {
        closeProjectModal();
    }
}

// Smooth scrolling enhancement
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize projects on page load
document.addEventListener('DOMContentLoaded', function() {
    // Show all projects by default
    filterProjects('all');
});