export default function FeaturesBenefits() {
    const features = [
        "Brainstorming and Ideation Sessions",
        "Workshops and Tutorials",
        "Coaching and Mentorship from Move Experts, including the Sui Foundation's Head of Developer Relations",
        "Access to Resources",
        "Networking Opportunities",
        "Solution Demonstrations"
    ];

    const benefits = [
        "Access Mentorship and Coaching",
        "Engage with the Sui Foundation",
        "Hands-On Learning",
        "Strengthen solutions that can be used to compete in global hackathons, enter accelerator programs, and become viable businesses.",
        "Showcase your skills",
        "Connect with other developers & potential mentors and partners",
        "All participants who successfully complete the Hacker House are eligible for a reward worth the equivalent of $100",
        "Participants would build robust solutions using Sui and prepare for the Sui Overflow 2025 Hackathon, a virtual global competition with over $500,000 in combined prizes."
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mb-16">
            <div className="bg-blue-100 py-16 px-8 sm:px-8">
                <div className="max-w-xl mx-auto">
                    <p className="text-xl sm:text-2xl font-bold text-blue-600 mb-6">Features of the Hacker House</p>
                    <ul className="list-disc list-inside text-[#020817] marker:text-blue-600 space-y-3 leading-7">
                        {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="bg-blue-50/30 py-16 px-8 sm:px-8">
                <div className="max-w-xl mx-auto">
                    <p className="text-xl sm:text-2xl font-bold text-blue-600 mb-6">Benefits for Participating Teams</p>
                    <ul className="list-disc list-inside text-[#020817] marker:text-blue-600 space-y-3 leading-7">                      
                         {benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                        ))}

                    </ul>
                </div>
                
            </div>
        </div>
    )
}