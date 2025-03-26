"use client";
import "./careers.css";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/NewNavbar/navbar";
import Image from "next/image";
import searchIcon from "../../../public/assets/careers/searchIcon.svg";
import locationIcon from "../../../public/assets/careers/locationIcon.svg";
import { getActiveJobsApi } from "@/services/jobService";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import TertiaryButton from "../../components/TertiaryButton/tertiaryButton";
import Loader from "@/components/Loader/Loader";

interface Job {
  jobId: string;
  jobName: string;
  jobType: string;
  jobLevel: string;
  jobCategory: string;
  workModel: string;
  workLocation: string;
  jobDate: string;
  jobBg: string;
}

interface FilterSection {
  title: string;
  isOpen: boolean;
  options: { id: string; label: string }[];
}

export default function Careers() {
  const router = useRouter();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showFilters, setShowFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [filterSections, setFilterSections] = useState<FilterSection[]>([
    {
      title: "Type of Employment",
      isOpen: false,
      options: [
        { id: "filter1", label: "Contract" },
        { id: "filter2", label: "Full Time" },
        { id: "filter3", label: "Internship" },
      ],
    },
    {
      title: "Job Level",
      isOpen: false,
      options: [
        { id: "filter4", label: "Entry Level" },
        { id: "filter5", label: "Mid Level" },
        { id: "filter6", label: "Senior Level"},
      ],
    },
    {
      title: "Categories",
      isOpen: false,
      options: [
        { id: "filter7", label: "Design" },
        { id: "filter8", label: "Development" },
        { id: "filter9", label: "Cloud & DevOps" },
        { id: "filter10", label: "QA" },
        { id: "filter11", label: "Management" },
      ],
    },
    {
      title: "Work Mode",
      isOpen: false,
      options: [
        { id: "filter12", label: "Onsite" },
        { id: "filter13", label: "Hybrid" },
        { id: "filter14", label: "Remote" },
      ],
    },
  ]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getActiveJobsApi();
        if (data.success) {
          setJobs(data.jobs);
        } else {
          setError("Failed to load jobs.");
        }
      } catch {
        setError("An error occurred while fetching jobs.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();

    // Check if mobile on initial load
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkIfMobile();

    // Set up event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Clean up event listener
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleFilterChange = (filter: string) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    );
  };

  const handleKnowMore = (jobId: string) => {
    router.push(`/pumex-job-description?id=${jobId}`);
  };

  const toggleFilterSection = (index: number) => {
    if (!isMobile) return; // Only toggle if on mobile
    
    setFilterSections((prevSections) =>
      prevSections.map((section, i) => {
        if (i === index) {
          return { ...section, isOpen: !section.isOpen };
        }
        return section;
      })
    );
  };

  const toggleAllFilters = () => {
    setShowFilters(!showFilters);
  };

  // Function for filtering and searching
  const getFilteredAndSearchedJobs = () => {
    return jobs.filter((job) => {
      const matchesSearchQuery = job.jobName
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesFilter = selectedFilters.length
        ? selectedFilters.every(
            (filter) =>
              job.jobType === filter ||
              job.jobLevel === filter ||
              job.jobCategory === filter ||
              job.workModel === filter
          )
        : true;
      return matchesSearchQuery && matchesFilter;
    });
  };

  const filteredAndSearchedJobs = getFilteredAndSearchedJobs();

  return (
    <div className="careers-main-container">
      <Loader duration={500} />
      <Navbar />
      <div className="careers-content-container">
        {/* Mobile Filter Toggle - Only visible on mobile */}
        <div className="filter-toggle-container">
          <h2> Current Job Openings</h2>
          <button className="filter-toggle-btn" onClick={toggleAllFilters}>
            <span>Filters</span>
            {showFilters ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>

        {/* Left Sidebar with Filters */}
        <div className={`careers-left-div ${showFilters ? "show-filters" : ""}`}>
          <h2>Filters</h2>
          {filterSections.map((section, index) => (
  <div className="filter-group" key={index}>
    <div 
      className={`filter-header ${section.isOpen ? 'open' : ''}`}
      onClick={() => toggleFilterSection(index)}
    >
      <h3>{section.title}</h3>
      {/* Accordion button only visible on mobile */}
      {isMobile && (
        <button className="accordion-btn">
          {section.isOpen ? (
            <ChevronUp size={18} />
          ) : (
            <ChevronDown size={18} />
          )}
        </button>
      )}
    </div>
    <hr className="filter-divider" />
    <div className="filter-options">
      {section.options.map((job) => (
        <div className="filter-option" key={job.id}>
          <input
            type="checkbox"
            id={job.id}
            className="filter-style"
            checked={selectedFilters.includes(job.label)}
            onChange={() => handleFilterChange(job.label)}
          />
          <label htmlFor={job.id}>{job.label}</label>
        </div>
      ))}
    </div>
  </div>
))}
        </div>
        {/* Right Content Area */}
        <div className="careers-right-div">
          <div className="right-top-div">
            <h2>Current Job Openings</h2>
            <div className="search-bar">
              <input
                type="text"
                id="job-search"
                placeholder="Search Jobs"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Image
                src={searchIcon}
                alt="Search Icon"
                className="search-icon"
              />
            </div>
          </div>
          <div className="right-bottom-div">
            {loading ? (
              <div className="jobs-loading-message">
                Loading job listings...
              </div>
            ) : error ? (
              <div className="error-message">{error}</div>
            ) : (
              <>
                {jobs.length === 0 ? (
                  <div className="no-jobs-message">No jobs available.</div>
                ) : (
                  <>
                    {filteredAndSearchedJobs.map((job) => (
                      <div className="job-card" key={job.jobId}>
                        <div className={`job-card-top-layer jobBg_${job.jobBg}`}>
                          <div className="job-date">
                            <h3>
                              {new Date(job.jobDate).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              })}
                            </h3>
                          </div>
                          <h2>{job.jobName}</h2>
                          <div className="job-tags">
                            {[
                              job.jobType,
                              job.jobLevel,
                              job.workModel,
                              job.jobCategory,
                            ].map((text, index) => (
                              <button key={index} className="job-tag">
                                {text}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="job-card-bottom-layer">
                          <div className="job-location">
                            <Image
                              src={locationIcon}
                              alt="Location Icon"
                              className="location-icon"
                            />
                            <span className="location-text">
                              {job.workLocation || "Location N/A"}
                            </span>
                          </div>
                          <TertiaryButton
                            onClick={() => handleKnowMore(job.jobId)}
                          >
                            Know More
                          </TertiaryButton>
                        </div>
                      </div>
                    ))}
                    {filteredAndSearchedJobs.length === 0 && (
                      <div className="no-jobs-message">
                        No jobs match the selected filters or search.
                      </div>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
