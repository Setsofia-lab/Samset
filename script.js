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
                                               category === 'research' ? 'research' : 'all')
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
    codebuddy: {
        title: "🚀 Codebuddy AI - Cloud-Native Education Platform",
        description: "A revolutionary cloud-native AI education platform that leverages cutting-edge AWS infrastructure to deliver personalized learning experiences.",
        details: [
            "Architected complete cloud infrastructure using AWS EC2 and Aurora PostgreSQL",
            "Built hybrid LLM orchestration system integrating Amazon Bedrock with external APIs (OpenAI, Google Gemini, Anthropic)",
            "Developed rapid prototyping capabilities with Bolt, delivering complete UI in just 24 hours",
            "Implemented full API system within one week of development",
            "Created MCP server with multi-agent analytics integration",
            "Enabled real-time learning assessment and personalized teaching at scale",
            "Transformed student-AI interactions into actionable educational insights"
        ],
        technologies: ["AWS EC2", "Aurora PostgreSQL", "Amazon Bedrock", "OpenAI API", "Google Gemini", "Anthropic", "MCP", "Multi-Agent Systems", "Bolt"],
        achievements: [
            "Complete UI delivered in 24 hours",
            "Full API implementation within one week",
            "Real-time learning analytics",
            "Scalable multi-tenant architecture"
        ],
        impact: "Revolutionizing AI education by providing instructors with flexible model selection and students with personalized learning experiences."
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