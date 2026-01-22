import React from 'react';

const ResumeCertifications: React.FC = () => {
  return (
    <section className="resume-section">
      <h3 className="resume-section-title">🏅 NVIDIA & AI Certifications</h3>
      <div className="resume-ambassador-description">
        <p><strong><a href="https://www.nvidia.com/en-us/training/instructor-directory/bio/?instructorId=0038Z000036WJjcQAG" target="_blank" rel="noopener noreferrer">NVIDIA Deep Learning Institute University Ambassador</a>:</strong> Certified to deliver free instructor-led workshops in cutting-edge AI, accelerated computing, and data science technologies to academic communities, enriching curriculum and providing students with industry-relevant skills for career advancement.</p>
      </div>
      <div className="resume-cert-category">
        <h4 className="resume-cert-category-title">Professional Certifications</h4>
        <div className="resume-certifications-grid">
          <div className="resume-cert-item"><span className="resume-nvidia-highlight">NVIDIA NCP</span> Agentic AI - Subject Matter Expert</div>
          <div className="resume-cert-item"><span className="resume-nvidia-highlight">NVIDIA NCP-AAI</span> Nvidia Certified Professional: Agentic AI</div>
        </div>
      </div>

      <div className="resume-cert-category">
        <h4 className="resume-cert-category-title">Specializations Earned</h4>
        <div className="resume-certifications-grid">
          <div className="resume-cert-item"><span className="resume-nvidia-highlight">NVIDIA DLI</span> Large Language Model (LLM) Applications</div>
          <div className="resume-cert-item"><span className="resume-nvidia-highlight">NVIDIA DLI</span> Large Language Model (LLM) Agents</div>
          <div className="resume-cert-item"><span className="resume-nvidia-highlight">NVIDIA DLI</span> Sovereign AI</div>
          <div className="resume-cert-item"><span className="resume-nvidia-highlight">NVIDIA DLI</span> Multimodal Generative AI</div>
        </div>
      </div>

      <div className="resume-cert-category">
        <h4 className="resume-cert-category-title">Instructor-Certified Courses</h4>
        <div className="resume-certifications-grid">
          <div className="resume-cert-item"><span className="resume-nvidia-highlight">NVIDIA DLI</span> Building Agentic AI Applications with LLMs</div>
          <div className="resume-cert-item"><span className="resume-nvidia-highlight">NVIDIA DLI</span> Building AI Agents with Multimodal Models</div>
          <div className="resume-cert-item"><span className="resume-nvidia-highlight">NVIDIA DLI</span> Building Transformer-Based NLP Applications</div>
          <div className="resume-cert-item"><span className="resume-nvidia-highlight">NVIDIA DLI</span> Building LLM Applications with Prompt Engineering</div>
          <div className="resume-cert-item"><span className="resume-nvidia-highlight">NVIDIA DLI</span> Rapid Application Development with LLMs</div>
          <div className="resume-cert-item"><span className="resume-nvidia-highlight">NVIDIA DLI</span> Efficient LLM Customization</div>
          <div className="resume-cert-item"><span className="resume-nvidia-highlight">NVIDIA DLI</span> Generative AI with Diffusion Models</div>
          <div className="resume-cert-item"><span className="resume-nvidia-highlight">NVIDIA DLI</span> Building RAG Agents with LLMs</div>
          <div className="resume-cert-item"><span className="resume-nvidia-highlight">NVIDIA DLI</span> Deploying RAG Pipelines for Production at Scale</div>
          <div className="resume-cert-item"><span className="resume-nvidia-highlight">NVIDIA DLI</span> Adding New Knowledge to LLMs</div>
          <div className="resume-cert-item"><span className="resume-nvidia-highlight">NVIDIA DLI</span> Applications of AI for Anomaly Detection</div>
        </div>
      </div>
    </section>
  );
};

export default ResumeCertifications;
