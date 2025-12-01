import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const SachinQuotation: React.FC = () => {
  const quotationRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    if (!quotationRef.current) return;
    setIsGenerating(true);

    try {
      const canvas = await html2canvas(quotationRef.current, {
        scale: 2,
        useCORS: true,
      });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("Upsoma_Quotation_SachinBansal.pdf");
    } catch (error) {
      console.error("PDF generation failed:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="p-5 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="mb-5 text-center">
        <button
          onClick={generatePDF}
          disabled={isGenerating}
          className={`px-6 py-3 font-bold rounded shadow text-white ${
            isGenerating
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-teal-700 hover:bg-teal-800"
          }`}
        >
          {isGenerating ? "Generating PDF..." : "Download PDF Now ⬇"}
        </button>
        <p className="text-sm text-gray-600 mt-2">
          (Note: इंटरनेट ऑन रखें ताकि PDF जनरेट हो सके)
        </p>
      </div>

      <div
        ref={quotationRef}
        className="bg-white max-w-3xl w-full p-10 shadow-lg text-left"
      >
        {/* Header */}
        <div className="flex justify-between border-b-4 border-teal-700 pb-5 mb-8">
          <div className="text-5xl font-serif">
            <span className="text-gray-800">Up</span>
            <span className="text-teal-700">soma</span>
          </div>
          <div className="text-right text-sm text-gray-600">
            <strong>Upsoma Web Agency</strong>
            <br />
            Digital Excellence Delivered
            <br />
            📞 +91 8178353728
            <br />
            🌐{" "}
            <a href="https://www.upsoma.in" className="text-teal-700">
              www.upsoma.in
            </a>
            <br />
            📧 upsomaconsultancy@gmail.com
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif text-gray-800">
            QUOTATION / PROPOSAL
          </h1>
        </div>

        {/* Info Section */}
        <div className="flex flex-col md:flex-row justify-between bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg border border-teal-100 shadow-sm mb-8">
          <div className="mb-4 md:mb-0">
            <h3 className="font-serif text-teal-800 text-xl font-semibold mb-3 border-b-2 border-teal-200 pb-1 inline-block">
              Prepared For
            </h3>
            <div className="space-y-2 mt-3">
              <p className="text-gray-700">
                <span className="font-medium text-teal-700">Client Name:</span>
                <span className="ml-2 text-gray-800 font-semibold">
                  Sachin Bansal
                </span>
              </p>
              <p className="text-gray-700">
                <span className="font-medium text-teal-700">Company:</span>
                <a
                  href="https://www.sachinbansal.com"
                  className="ml-2 text-blue-600 hover:text-blue-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.sachinbansal.com
                </a>
              </p>
            </div>
          </div>

          <div className="md:text-right">
            <h3 className="font-serif text-teal-800 text-xl font-semibold mb-3 border-b-2 border-teal-200 pb-1 inline-block">
              Quote Details
            </h3>
            <div className="space-y-2 mt-3">
              <p className="text-gray-700">
                <span className="font-medium text-teal-700">Date:</span>
                <span className="ml-2 text-gray-800 font-semibold">
                  01 Dec 2025
                </span>
              </p>
              <p className="text-gray-700">
                <span className="font-medium text-teal-700">Quote ID:</span>
                <span className="ml-2 px-2 py-1 bg-teal-50 text-teal-800 rounded text-sm font-mono">
                  #UPS-WEB-001
                </span>
              </p>
              <p className="text-gray-700">
                <span className="font-medium text-teal-700">Valid Until:</span>
                <span className="ml-2 text-gray-800 font-semibold">
                  31 Dec 2025
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Project Scope */}
        <h2 className="font-serif text-2xl text-gray-800 border-b pb-2 mb-4">
          Project Scope: Student Question & Answer Page Addition
        </h2>
        <p className="text-gray-700 mb-4">
          Upsoma will design and develop a responsive, high-performance portal
          where:
        </p>

        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Admin panel can create, update, delete, and manage questions.</li>
          <li>Students can Give answers to all the questions</li>
          <li>Secure login for Admins</li>
          <li>Real-time data updates and dashboard analytics like Pie chart</li>
          <li>
            Responsive design suitable for mobile and desktop devices.
          </li>
        </ul>

        {/* Table */}
        <table className="w-full border-collapse mb-6">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="text-left p-3">Description</th>
              <th className="text-right p-3">Amount (INR)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3 text-gray-800">
                <strong>UI/UX Design</strong>
                <br />
                <span className="text-gray-600 text-sm">
                  Custom portal design, responsive layout, user-friendly
                  interface.
                </span>
              </td>
              <td className="p-3 text-right text-teal-700 font-semibold">
                ₹ 800
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-3 text-gray-800">
                <strong>Admin Panel + Features + Technology</strong>
                <br />
                <span className="text-gray-600 text-sm">
                  Admin dashboard, student score management,
                  real-time updates.
                </span>
              </td>
              <td className="p-3 text-right text-teal-700 font-semibold">
                ₹ 1200
              </td>
            </tr>
          </tbody>
        </table>

        {/* Totals */}
        <div className="w-1/2 ml-auto mb-6">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="text-right p-2">Sub Total:</td>
              </tr>

              <tr className="font-bold text-teal-700 border-t">
                <td className="text-right p-2">Total Payable:</td>
                <td className="text-right p-2 font-semibold text-teal-700">
                  ₹ 2,000
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Signature */}
        <div className="flex justify-between items-end mt-10">
          <div></div>

          <div className="text-center">
            <div className="mb-1">
              <img
                src="/signature.png"
                alt="Authorized Signature"
                className="h-10 w-32 object-contain mx-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
            </div>

            <div className="border-t-2 border-teal-700 pt-2 text-gray-800 w-48 mx-auto">
              <div className="text-sm font-medium">AUTHORISED SIGNATURE</div>
              <div className="text-teal-700 font-semibold">Upsoma Team</div>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 mt-10 text-sm">
          Thank you for choosing Upsoma! | www.upsoma.in
        </div>
      </div>
    </div>
  );
};

export default SachinQuotation;
