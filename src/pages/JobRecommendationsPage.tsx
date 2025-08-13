import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  skills: string[];
  postedDate: string;
  salary: string;
  backgroundColor: string;
  textColor: string;
}

const JobRecommendationsPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    jobType: 'all',
    location: '',
    search: ''
  });

  useEffect(() => {
    // Colors that match the course cards
    const jobColors = [
      { bg: '#1EC87C', text: '#fff' },
      { bg: '#FF9F43', text: '#fff' },
      { bg: '#7367F0', text: '#fff' },
      { bg: '#EA5455', text: '#fff' },
      { bg: '#00CFE8', text: '#fff' },
      { bg: '#FFC107', text: '#000' },
    ];
    // Simulate API call
    const fetchJobs = async () => {
      try {
        // In a real app, this would be an actual API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data - aligned with course industries and content style
        const mockJobs: Job[] = [
          {
            id: 1,
            title: 'Electrical Installation Technician',
            company: 'PowerGrid Solutions Ltd',
            location: 'Nairobi, Kenya',
            type: 'Full-time',
            description: 'We are seeking a skilled Electrical Installation Technician to join our team. You will be responsible for installing, maintaining, and repairing electrical systems in residential and commercial buildings, ensuring all work meets safety standards and regulations.',
            skills: ['Wiring', 'Circuit Installation', 'Troubleshooting', 'Safety Compliance'],
            postedDate: '2 days ago',
            salary: 'Ksh 45,000 - 65,000',
            backgroundColor: jobColors[0].bg,
            textColor: jobColors[0].text
          },
          {
            id: 2,
            title: 'Automotive Mechanic',
            company: 'Elite Auto Care',
            location: 'Kampala, Uganda',
            type: 'Full-time',
            description: 'Join our team as an Automotive Mechanic to perform maintenance, diagnostics, and repairs on various vehicle makes and models. The ideal candidate should have experience with engine repair, brake systems, and electrical components.',
            skills: ['Engine Repair', 'Brake Systems', 'Diagnostics', 'Preventive Maintenance'],
            postedDate: '1 week ago',
            salary: 'UGX 1,800,000 - 2,500,000',
            backgroundColor: jobColors[1].bg,
            textColor: jobColors[1].text
          },
          {
            id: 3,
            title: 'Master Potter',
            company: 'African Clay Creations',
            location: 'Arusha, Tanzania',
            type: 'Contract',
            description: 'We are looking for an experienced potter to create unique ceramic pieces and lead workshops. The role involves designing, throwing, glazing, and firing pottery using both traditional and modern techniques.',
            skills: ['Wheel Throwing', 'Glazing', 'Kiln Operation', 'Design'],
            postedDate: '3 days ago',
            salary: 'TZS 1,200,000 - 1,800,000',
            backgroundColor: jobColors[2].bg,
            textColor: jobColors[2].text
          },
          {
            id: 4,
            title: 'Plumbing Supervisor',
            company: 'AquaFlow Systems',
            location: 'Kigali, Rwanda',
            type: 'Full-time',
            description: 'Lead our team of plumbers in installing and maintaining plumbing systems. Responsibilities include project planning, quality control, and ensuring all work meets building codes and safety standards.',
            skills: ['Pipe Installation', 'Team Leadership', 'Project Management', 'Code Compliance'],
            postedDate: '5 days ago',
            salary: 'RWF 1,500,000 - 2,200,000',
            backgroundColor: jobColors[3].bg,
            textColor: jobColors[3].text
          },
          {
            id: 5,
            title: 'Jewelry Making Instructor',
            company: 'Shine Bright Academy',
            location: 'Remote',
            type: 'Part-time',
            description: 'Teach jewelry making techniques to students of all skill levels. Develop curriculum, conduct workshops, and provide hands-on instruction in various jewelry making methods including beading, wire work, and metal fabrication.',
            skills: ['Beading', 'Metal Work', 'Teaching', 'Design'],
            postedDate: '1 day ago',
            salary: '$15 - $25/hr',
            backgroundColor: jobColors[4].bg,
            textColor: jobColors[4].text
          },
          {
            id: 6,
            title: 'Tailoring Workshop Manager',
            company: 'Stitch Perfect Ltd',
            location: 'Nakuru, Kenya',
            type: 'Full-time',
            description: 'Manage our tailoring workshop, overseeing production, quality control, and a team of tailors. The ideal candidate should have experience in garment construction, pattern making, and team leadership.',
            skills: ['Pattern Making', 'Sewing', 'Team Management', 'Quality Control'],
            postedDate: '1 week ago',
            salary: 'Ksh 35,000 - 50,000',
            backgroundColor: jobColors[5].bg,
            textColor: jobColors[5].text
          }
        ];
        
        setJobs(mockJobs);
        setLoading(false);
      } catch {
        setError('Failed to load job recommendations. Please try again later.');
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter(job => {
    const matchesType = filters.jobType === 'all' || job.type.toLowerCase() === filters.jobType.toLowerCase();
    const matchesLocation = job.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesSearch = 
      job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      job.company.toLowerCase().includes(filters.search.toLowerCase()) ||
      job.description.toLowerCase().includes(filters.search.toLowerCase());
    
    return matchesType && matchesLocation && matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FDF8EE] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-10 bg-gray-200 rounded w-1/3"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2"></div>
            <div className="space-y-4 mt-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                  <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#FDF8EE] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDF8EE] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Job Recommendations</h1>
        <p className="text-gray-600 mb-8">Find the perfect job that matches your skills and preferences</p>
        
        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-lg font-semibold mb-4">Filter Jobs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search</label>
              <input
                type="text"
                id="search"
                placeholder="Job title, company, or keywords"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={filters.search}
                onChange={(e) => setFilters({...filters, search: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="jobType" className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
              <select
                id="jobType"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={filters.jobType}
                onChange={(e) => setFilters({...filters, jobType: e.target.value})}
              >
                <option value="all">All Types</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                id="location"
                placeholder="City, country, or remote"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={filters.location}
                onChange={(e) => setFilters({...filters, location: e.target.value})}
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={() => setFilters({ jobType: 'all', location: '', search: '' })}
                className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div 
                key={job.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                style={{ borderTop: `4px solid ${job.backgroundColor}` }}
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center mb-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4"
                      style={{ 
                        backgroundColor: `${job.backgroundColor}20`, 
                        color: job.backgroundColor 
                      }}
                    >
                      {job.company.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                      <p className="text-sm text-gray-600">{job.company}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{job.description}</p>
                  
                  <div className="mt-auto">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <LocationOnOutlinedIcon className="h-4 w-4 mr-1" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <WorkOutlineIcon className="h-4 w-4 mr-1 text-gray-500" />
                        <span className="text-gray-600">{job.type}</span>
                      </div>
                      <div className="text-primary font-medium">{job.salary}</div>
                    </div>
                  </div>
                </div>
                
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <AccessTimeIcon className="h-4 w-4 mr-1" />
                      <span>{job.postedDate}</span>
                    </div>
                    <Link
                      to={`/jobs/${job.id}`}
                      className="text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">No jobs found</h3>
              <p className="mt-1 text-sm text-gray-500">
                We couldn't find any jobs matching your criteria. Try adjusting your filters.
              </p>
              <div className="mt-6">
                <button
                  onClick={() => setFilters({ jobType: 'all', location: '', search: '' })}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobRecommendationsPage;
