import { useState, useCallback, useEffect } from "react";
import { Lead, LeadStatus } from "@shared/api";
import { useLeads } from "@/hooks/useLeads";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Users, Sparkles, MessageSquare, X } from "lucide-react";

// Combined Dashboard Component
const Dashboard = () => {
  // State for search and filters
  const [searchQuery, setSearchQuery] = useState("");
  const [dateRange, setDateRange] = useState("7days");
  const [customStartDate, setCustomStartDate] = useState("");
  const [customEndDate, setCustomEndDate] = useState("");
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [messageModalOpen, setMessageModalOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);
  const [selectedMessageLeadId, setSelectedMessageLeadId] = useState(null);
  const [leadStatuses, setLeadStatuses] = useState({});

  // Use the useLeads hook
  const {
    leads,
    allLeads,
    leadsByStatus,
    addMessage,
    getLeadMessages,
    markAsViewed,
    getLeadsWithUnviewedMessages,
    getUnviewedMessageCount,
  } = useLeads();

  // Update lead statuses when allLeads changes
  useEffect(() => {
    if (allLeads) {
      const statuses = allLeads.reduce((acc, lead) => {
        acc[lead.id] = lead.status;
        return acc;
      }, {});
      setLeadStatuses(statuses);
    }
  }, [allLeads]);

  // Handle status filter change
  const handleSelectBox = (status) => {
    setSelectedStatus(selectedStatus === status ? null : status);
  };

  // Handle lead selection
  const handleSelectLead = (lead) => {
    setSelectedLead(lead);
    markAsViewed(lead.id);
  };

  // Handle message submission
  const handleSendMessage = (message) => {
    if (selectedLead) {
      addMessage(selectedLead.id, message);
      setMessageModalOpen(false);
      toast.success("Message sent successfully!");
    }
  };

  // Get filtered leads based on search and status
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch = lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = !selectedStatus || lead.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  // Render the dashboard UI
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Lead Dashboard</h1>
          <div className="flex space-x-4">
            <Button onClick={() => setMessageModalOpen(true)}>
              <MessageSquare className="mr-2 h-4 w-4" />
              New Message
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Search and Filter */}
          <div className="mb-6 bg-white p-4 rounded-lg shadow">
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search leads..."
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <select
                className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
              >
                <option value="7days">Last 7 days</option>
                <option value="30days">Last 30 days</option>
                <option value="custom">Custom Range</option>
              </select>
              {dateRange === 'custom' && (
                <div className="flex space-x-2">
                  <input
                    type="date"
                    className="px-4 py-2 border rounded-md"
                    value={customStartDate}
                    onChange={(e) => setCustomStartDate(e.target.value)}
                  />
                  <span className="flex items-center">to</span>
                  <input
                    type="date"
                    className="px-4 py-2 border rounded-md"
                    value={customEndDate}
                    onChange={(e) => setCustomEndDate(e.target.value)}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Status Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {['NEW', 'CONTACTED', 'QUALIFIED', 'LOST'].map((status) => (
              <div
                key={status}
                className={`p-4 rounded-lg shadow cursor-pointer transition-colors ${
                  selectedStatus === status ? 'bg-blue-100 border-2 border-blue-500' : 'bg-white hover:bg-gray-50'
                }`}
                onClick={() => handleSelectBox(status)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-700">{status}</h3>
                  <span className="text-2xl font-bold">
                    {leadsByStatus[status]?.length || 0}
                  </span>
                </div>
                <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500"
                    style={{
                      width: `${(leadsByStatus[status]?.length / Math.max(1, allLeads.length)) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Leads List and Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Leads List */}
            <div className="lg:col-span-1 bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4 border-b">
                <h2 className="text-lg font-medium">Leads</h2>
              </div>
              <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 400px)' }}>
                {filteredLeads.length > 0 ? (
                  <ul className="divide-y">
                    {filteredLeads.map((lead) => (
                      <li
                        key={lead.id}
                        className={`p-4 hover:bg-gray-50 cursor-pointer ${
                          selectedLead?.id === lead.id ? 'bg-blue-50' : ''
                        }`}
                        onClick={() => handleSelectLead(lead)}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{lead.name}</h3>
                            <p className="text-sm text-gray-500">{lead.email}</p>
                            <span className="inline-block mt-1 px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                              {lead.status}
                            </span>
                          </div>
                          {getUnviewedMessageCount(lead.id) > 0 && (
                            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                              {getUnviewedMessageCount(lead.id)}
                            </span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="p-4 text-center text-gray-500">
                    No leads found matching your criteria.
                  </div>
                )}
              </div>
            </div>

            {/* Lead Details and Messages */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow overflow-hidden">
              {selectedLead ? (
                <>
                  <div className="p-4 border-b flex justify-between items-center">
                    <div>
                      <h2 className="text-lg font-medium">{selectedLead.name}</h2>
                      <p className="text-sm text-gray-500">{selectedLead.email}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        onClick={() => setMessageModalOpen(true)}
                      >
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                      <select
                        className="px-3 py-1 border rounded-md text-sm"
                        value={leadStatuses[selectedLead.id] || selectedLead.status}
                        onChange={(e) => {
                          const newStatus = e.target.value;
                          setLeadStatuses(prev => ({
                            ...prev,
                            [selectedLead.id]: newStatus
                          }));
                          // Here you would typically update the status in your backend
                        }}
                      >
                        {['NEW', 'CONTACTED', 'QUALIFIED', 'LOST'].map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-4">Messages</h3>
                    <div className="space-y-4" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                      {getLeadMessages(selectedLead.id).map((message, index) => (
                        <div
                          key={index}
                          className={`p-3 rounded-lg ${
                            message.sender === 'user' ? 'bg-blue-50' : 'bg-gray-50'
                          }`}
                        >
                          <div className="flex justify-between text-sm text-gray-500 mb-1">
                            <span>{message.sender === 'user' ? 'You' : selectedLead.name}</span>
                            <span>{new Date(message.timestamp).toLocaleString()}</span>
                          </div>
                          <p className="text-gray-800">{message.text}</p>
                        </div>
                      ))}
                      {getLeadMessages(selectedLead.id).length === 0 && (
                        <p className="text-gray-500 text-center py-4">No messages yet.</p>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                  <Users className="h-12 w-12 mb-4 text-gray-300" />
                  <p>Select a lead to view details and messages</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Message Modal */}
      {messageModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-medium">New Message</h2>
              <button
                onClick={() => setMessageModalOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4">
              <textarea
                className="w-full h-32 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Type your message here..."
                ref={(el) => el && el.focus()}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && e.metaKey) {
                    handleSendMessage(e.target.value);
                  }
                }}
              />
            </div>
            <div className="p-4 bg-gray-50 flex justify-end space-x-2">
              <Button
                variant="outline"
                onClick={() => setMessageModalOpen(false)}
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  const textarea = document.querySelector('textarea');
                  if (textarea && textarea.value.trim()) {
                    handleSendMessage(textarea.value.trim());
                    textarea.value = '';
                  }
                }}
              >
                Send Message
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
