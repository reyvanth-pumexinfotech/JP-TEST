"use client";

import "./pumex-job-description.css";
import NewNavbar from "../../components/NewNavbar/navbar";
import Footer from "../../components/Footer/footer";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SecondaryButton from "@/components/SecondaryButton/secondaryButton";
import linkedinIcon from "../../../public/assets/careers/linkedinIcon.svg";
import facebookIcon from "../../../public/assets/careers/facebookIcon.svg";
import copyIcon from "../../../public/assets/careers/copyIcon.svg";
import { getJobByIdApi } from "@/services/jobService";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ApplicationForm from "@/components/ApplicationForm/ApplicationForm";

interface JobDetails {
  jobName: string;
  jobType: string;
  jobCategory: string;
  jobLevel: string;
  workModel: string;
  workLocation: string;
  requirements: string;
  qualifications: string;
  designation: string;
  experience: string;
  noticePeriod: string;
  about: string;
  responsibilities: string;
}

function JobContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const jobId = searchParams.get('id');
  
  const [jobDetails, setJobDetails] = useState<JobDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const fetchJobDetails = async () => {
      if (!jobId) {
        setError("No job ID provided");
        setLoading(false);
        return;
      }
  
      try {
        const response = await getJobByIdApi(jobId);
  
        if (response.success) {
          setJobDetails(response.job);
        } else {
          setError("Failed to load job details");
        }
      } catch (error) {
        console.error('Error fetching job details:', error);
        setError("An error occurred while fetching job details");
      } finally {
        setLoading(false);
      }
    };
  
    fetchJobDetails();
  }, [jobId]);

  const handleShare = async (platform: 'linkedin' | 'facebook' | 'copy') => {
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
  

  if (loading) return <div className="loading-state"> <svg
  xmlns="http://www.w3.org/2000/svg"
  width="64"
  height="64"
  viewBox="0 0 24 24"
>
  <g
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
  >
    <path
      strokeDasharray="16"
      strokeDashoffset="16"
      d="M12 3c4.97 0 9 4.03 9 9"
    >
      <animate
        fill="freeze"
        attributeName="stroke-dashoffset"
        dur="0.3s"
        values="16;0"
      />
      <animateTransform
        attributeName="transform"
        dur="1.5s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </path>
    <path
      strokeDasharray="64"
      strokeDashoffset="64"
      strokeOpacity=".3"
      d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"
    >
      <animate
        fill="freeze"
        attributeName="stroke-dashoffset"
        dur="1.2s"
        values="64;0"
      />
    </path>
  </g>
</svg></div>;
  if (error) return <div className="error-state">{error}</div>;
  if (!jobDetails) return <div className="not-found-state">Job not found</div>;

  return (
    <>
      <div className="back-button-div">
        <button onClick={() => router.back()} className="back-button">
          Go Back
        </button>
      </div>
      
      <div className="title-div">
        <div className="title-top-div">
          <h2>{jobDetails.jobName}</h2>
          <div className="job-apply-fixer-div">
          <SecondaryButton
            onClick={() => setIsFormOpen(true)}
          >
            Apply Now
          </SecondaryButton>
        </div>
        </div>
        <div className="title-bottom-div">
          <div className="tags-div">
            <span className="tag">{jobDetails.experience}</span>
            <span className="tag">{jobDetails.jobType}</span>
            <span className="tag">{jobDetails.workLocation}</span>
          </div>
          <div className="social-icons">
            <button onClick={() => handleShare('linkedin')} className="share-button">
              <Image src={linkedinIcon} alt="Share on LinkedIn" />
            </button>
            <button onClick={() => handleShare('facebook')} className="share-button">
              <Image src={facebookIcon} alt="Share on Facebook" />
            </button>
            <button onClick={() => handleShare('copy')} className="share-button">
              <Image src={copyIcon} alt="Copy link" />
            </button>
          </div>
        </div>
      </div>

      <ApplicationForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        jobName={jobDetails.jobName}
      />
      
      <div className="content-div">
        <div className="about-div">
          <h2>About</h2>
          <p>{jobDetails.about}</p>
        </div>
        
        <div className="what-you-will-do-div">
          <h2>What you will do</h2>
          <p>{jobDetails.responsibilities}</p>
        </div>
        
        <div className="what-we-are-looking-div">
          <h2>What we are looking for</h2>
          <p>{jobDetails.requirements}</p>
        </div>

        <div className="qualifications">
          <h2>Qualifications</h2>
          <p>{jobDetails.qualifications}</p>
        </div>

        <div className="designation-noticeperiod-div">
        <span className="designation">Designation: {jobDetails.designation}</span>
        <span className="notice-period">Notice Period: {jobDetails.noticePeriod}</span>
        </div>

      </div>
    </>
  );
}

export default function JobDescription() {
  return (
    <div className="application-main-container">
      <NewNavbar />
      <Suspense fallback={<div className="loading-state">Loading...</div>}>
        <JobContent />
      </Suspense>
      <Footer />
    </div>
  );
}