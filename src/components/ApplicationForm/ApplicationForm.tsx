import React, { useState, useEffect, useRef, useCallback } from "react";
import Inputfield from "../../components/inputField/inputfiled";
import { applyForJobApi } from "../../services/jobService";
import PrimaryButton from "../PrimaryButton/primaryButton";
import Attachment from "../../../public/assets/careers/MaterialSymbolsAttachFile.svg"
import "./ApplicationForm.css";
import Image from "next/image";
import Swal from "sweetalert2";

interface ApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
  jobName: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  resume: File | null;
}

interface FormErrors {
  name: string | null;
  email: string | null;
  phone: string | null;
  resume: string | null;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({
  isOpen,
  onClose,
  jobName,
}) => {
  const initialFormData: FormData = {
    name: "",
    email: "",
    phone: "",
    resume: null,
  };

  const initialFormErrors: FormErrors = {
    name: null,
    email: null,
    phone: null,
    resume: null,
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<FormErrors>(initialFormErrors);
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string>("Upload Resume");
  const [isClosing, setIsClosing] = useState(false);

  const modalRef = useRef<HTMLDivElement | null>(null);

  const resetForm = () => {
    setFormData(initialFormData);
    setFormErrors(initialFormErrors);
    setGeneralError(null);
    setSelectedFileName("Upload Resume");
  };

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
      resetForm(); // Reset the form when closing
    }, 900);
  }, [onClose]);

  // Handle clicks outside the modal 
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClose]);

  // Reset form data when the modal is opened
  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen]);

  if (!isOpen && !isClosing) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        setFormErrors({ ...formErrors, resume: "File size should not exceed 5MB" });
        return;
      }

      if (file.type !== "application/pdf") {
        setFormErrors({ ...formErrors, resume: "Please upload a PDF file." });
        return;
      }

      setFormData({ ...formData, resume: file });
      setSelectedFileName(file.name);
      setFormErrors({ ...formErrors, resume: null });
    } else {
      setSelectedFileName("Upload Resume");
    }
  };

  const validateForm = () => {
    const errors: FormErrors = {
      name: null,
      email: null,
      phone: null,
      resume: null,
    };
    let hasError = false;

    if (!formData.name.trim()) {
      errors.name = "* Name is required";
      hasError = true;
    }

    if (!formData.email.trim()) {
    errors.email = "* Email is required";
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "* Invalid email format";
      hasError = true;
    }

    if (!formData.phone.trim()) {
      errors.phone = "* Phone number is required";
      hasError = true;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "* Invalid phone number";
      hasError = true;
    }

    if (!formData.resume) {
      errors.resume = "* Resume is required";
      hasError = true;
    }

    setFormErrors(errors);
    return !hasError;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError(null);

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    Swal.fire({
      title: 'Submitting...',
      text: 'Please wait while we submit your application.',
      allowOutsideClick: false,
      customClass: {
        popup: "pumex-admin-popups-swal-popup",
        title: "pumex-admin-popups-swal-title",
        htmlContainer: "pumex-admin-popups-swal-text",
        confirmButton: "pumex-admin-popups-swal-button",
      },
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      const applicationData = {
        jobName,
        fullName: formData.name,
        emailAddress: formData.email,
        phoneNumber: formData.phone,
        resume: formData.resume as File,
      };

      await applyForJobApi(applicationData);

      Swal.fire({
        title: 'Success!',
        text: 'Your application has been submitted successfully.',
        icon: 'success',
        confirmButtonText: 'OK',
        customClass: {
          popup: "pumex-admin-popups-swal-popup",
          title: "pumex-admin-popups-swal-title",
          htmlContainer: "pumex-admin-popups-swal-text",
          confirmButton: "pumex-admin-popups-swal-button",
        },
      });

      handleClose();
    } catch (err) {
      setGeneralError(
        err instanceof Error ? err.message : "Failed to submit application"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="application-modal-main-div">
      <div
        ref={modalRef}
        className={`application-modal-content-div ${
          isClosing ? "closing" : ""
        }`}
      >
        <button
          onClick={handleClose}
          className="application-modal-close-button"
          aria-label="Close application form"
        >
          &times;
        </button>
        <h2>Apply Now!</h2>

        {generalError && <div className="error-message">{generalError}</div>}

        <form className="application-modal-form" onSubmit={handleSubmit}>
          <div className="application-modal-form-group">
            <label htmlFor="name">Full Name*</label>
            <Inputfield
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              type="text"
            />
            {formErrors.name && <div className="field-error-message">{formErrors.name}</div>}
          </div>

          <div className="application-modal-form-group">
            <label htmlFor="email">Email Address*</label>
            <Inputfield
              name="email"
              placeholder="Enter your Email-ID"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              type="email"
            />
            {formErrors.email && <div className="field-error-message">{formErrors.email}</div>}
          </div>

          <div className="application-modal-form-group">
            <label htmlFor="phone">Phone Number*</label>
            <Inputfield
              name="phone"
              placeholder="Enter your Phone Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              type="tel"
            />
            {formErrors.phone && <div className="field-error-message">{formErrors.phone}</div>}
          </div>

          <div className="application-form-file-upload">
            <Image src={Attachment} alt="WU" className="file-upload-icon" />
            <input
              type="text"
              readOnly
              value={selectedFileName || "Upload Resume"}
              className="file-name-display"
              onClick={() => document.getElementById("resumeFile")?.click()}
            />
            <input
              type="file"
              id="resumeFile"
              accept=".pdf"
              onChange={handleFileChange}
              style={{ display: "none" }}
              required
            />
           
          </div>
          {formErrors.resume && <div className="field-error-message">{formErrors.resume}</div>}

          <div className="application-modal-form-apply-button">
            <PrimaryButton
              onClick={() =>
                handleSubmit(new Event("submit") as unknown as React.FormEvent)
              }
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;