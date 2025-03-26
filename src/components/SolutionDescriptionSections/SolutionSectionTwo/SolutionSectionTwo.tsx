"use client";

import "./SolutionSectionTwo.css";
import PrimaryButton from "../../PrimaryButton/primaryButton";
import { useRouter } from "next/navigation";
import Image from "next/image";
import linkedinIcon from "../../../../public/assets/solutions/solutions-linkedin.svg";
import facebookIcon from "../../../../public/assets/solutions/solutions-facebook.svg";
import twitterIcon from "../../../../public/assets/solutions/solutions-twitter.svg";
import copyIcon from "../../../../public/assets/solutions/solutions-copy.svg";

const SolutionSectionTwo = () => {

  
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/contact-us");
  };

  const solutions = [
    {
      title: "Introduction to Cloud Optimization Engine",
      description:
        "The Cloud Optimization Engine is a cutting-edge solution engineered to help businesses optimize their cloud environments in real time, achieving enhanced performance, improved resource allocation, and significant cost savings. As more companies shift to the cloud, managing cloud resources efficiently has become a paramount challenge. Many organizations face issues with overprovisioning or underutilizing their cloud infrastructure, which can result in ",
    },
    {
      title: "Key Features",
      description:
        "The Cloud Optimization Engine is packed with aers scalability and flexibility, but without proper optimization, these advantages can be overshadowed by rising costs and inefficiencies. This engine ensures that resources are allocated dynamically based on workload demands, ensuring that cloud computing environments are both responsive and cost-efficient. Through advanced machine learning algorithms, it continuously learns and adapts to usage patterns, enabling organizations to minimize waste, optimize resource utilization, and lower costs. features designed to transform the way businesses approach cloud resource management. These features help optimize performance, reduce operational costs, and ensure scalability as your cloud needs evolve. Below are some of the key features that make this engine a must-have for organizations of all sizes:",
    },
    {
      title: "How It Works..!!",
      description:
        "The Cloud Optimization Engine operates by seamlessly integrating with your existing cloud infrastructure, whether it’s hosted on AWS, Google Cloud, or Azure. Once integrated, it collects and analyzes real-time data from your cloud environment to identify patterns in resource usage, performance, and costs. This data is then processed by sophisticated machine learning algorithms to generate insights and optimization recommendations. At the heart of the Cloud Optimization Engine is its ability to continuously learn from the data it processes. It doesn't just optimize cloud resources once; instead, it adapts to changing workloads and usage patterns over time. This ensures that your cloud infrastructure always operates at peak efficiency, no matter how workloads evolve. For example, during periods of low demand, the engine might recommend scaling down resources to save costs. Conversely, during high-demand periods, it can suggest scaling up resources to ensure smooth and uninterrupted service. In addition to real-time scaling, the engine can also predict future usage patterns, helping businesses plan for upcoming peaks or resource shortages well in advance. Through integration with management platforms and an intuitive user interface, the engine also allows administrators to take immediate action based on its recommendations. This seamless operation ensures that cloud resources are used as efficiently as possible, without the need for constant manual intervention or oversight.",
    },
    {
      title: "Benefits of Using Cloud Optimization Engine",
      description:
        "The Cloud Optimization Engine offers numerous benefits, including cost savings, improved performance, enhanced scalability, and ease of use. Here’s a closer look at the advantages businesses can expect when adopting this solution: Cost Efficiency: One of the primary benefits of the Cloud Optimization Engine is its ability to significantly reduce cloud infrastructure costs. By continuously monitoring resource usage and reallocating resources as needed, the engine helps businesses avoid overpaying for underutilized resources. With cost optimization at the forefront, companies can reinvest savings into other strategic areas of their operations Improved Performance: The engine ensures that your applications and services are always running at optimal performance levels. By automatically adjusting resources based on demand, it prevents performance degradation during high-traffic periods, while also reducing waste during quieter times. This balance ensures a smooth user experience and eliminates the risks of downtime or slow service.",
    },
    {
      title: " Customer Testimonials",
      description:
        "Our clients have seen outstanding results from implementing the Cloud Optimization Engine. Many businesses have reported significant improvements in both cloud cost management and performance optimization. Below are some success stories:mpany Name], a leading e-commerce platform, reduced their cloud infrastructure costs by 30% within the first three months of deployment. The engine’s real-time resource scaling and predictive analytics helped them efficiently handle peak shopping seasons while minimizing unnecessary cloud spendnother C, a healthcare provider, experienced improved system uptime and faster data processing times for patient records after integrating the Cloud Optimization Engine. The solution’s proactive recommendations ensured that critical applications had the necessary resources during emergencies, reducing downtime and enhancing patient care.ese are just a few examples of how the Cloud Optimization Engine has transformed cloud resource management for businesses across different industries, helping them balance performance, scalability, and cost savings.Getting Startedetting started with the Cloud Optimization Engine is quick and straightforward. To begin, simply reach out to our sales team to schedule a personalized demo. During the demo, our experts will walk you through the solution’s capabilities and how it can be tailored to your organization’s unique needs.We offer a free trial period so that you can experience the benefits of the Cloud Optimization Engine firsthand. Our team will also assist you with the integration process, ensuring that your cloud infrastructure is optimized from day one. We provide ongoing support to help you get the most out of the engine, with regular updates and new features based on the latest technological advancements.tart your journey toward cloud optimization today. Contact us for a demo and see how the Cloud Optimization Engine can help you achieve a more efficient, scalable, and cost-effective cloud infrastructure. Reach out now to learn more and get started.",
    },
    
  ];

  const handleShare = async (platform: 'linkedin' | 'facebook' | 'twitter' | 'copy') => {
    const url = window.location.href;
    const caption = `We are hiring! Are you the person who fits in? Check out this job: ${url}`;
    const copytext = `${url}`;
  
    switch (platform) {
      case 'linkedin':
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url + "?caption=" + encodeURIComponent(caption))}`
        );
        break;
      case 'facebook':
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(caption)}`
        );
        break;
      case 'twitter':
        window.open(
          `/solution-description`
        );
        break;
      case 'copy':
        try {
          await navigator.clipboard.writeText(copytext);
          alert("Copied to clipboard!");
        } catch (error) {
          console.error('Failed to copy URL:', error);
        }
        break;
    }
  };


  return (
    <div className="solution-section-two-main-div">
      <div className="solution-section-two-cards-div">
        <div className="solution-section-two-cards-div-card">
          <h2>Share the Insights..!</h2>
          <p>Enjoyed this blog? Share it with your friends and let them in on the insights too!</p>
          <div className="social-icons">
            <button onClick={() => handleShare('linkedin')} className="share-button">
              <Image src={linkedinIcon} alt="Share on LinkedIn" />
            </button>
            <button onClick={() => handleShare('facebook')} className="share-button">
              <Image src={facebookIcon} alt="Share on Facebook" />
            </button>
            <button onClick={() => handleShare('twitter')} className="share-button">
              <Image src={twitterIcon} alt="Share on Twitter" />
            </button>
            <button onClick={() => handleShare('copy')} className="share-button">
              <Image src={copyIcon} alt="Copy link" />
            </button>
          </div>
        </div>

        <div className="solution-section-two-cards-div-card">
          <h2>Have Questions? Let&apos;s Talk..!</h2>
          <p>We&apos;re here to help! Click below to connect with us and get the answers you need, hassle-free and quickly.</p>
          <div className="solution-card-contact-button">
          <PrimaryButton onClick={handleButtonClick}>Contact</PrimaryButton>
          </div>
          
        </div>
      </div>

      <div className="solution-section-two-contents-div">
        {solutions.map((solution, index) => (
          <div key={index}>
            <h2>{solution.title}</h2>
            <p>{solution.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionSectionTwo;
