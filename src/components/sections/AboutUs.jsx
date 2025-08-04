import { motion } from 'motion/react';
import { UserGroupIcon, LightBulbIcon, GlobeAltIcon, HeartIcon } from '@heroicons/react/24/outline';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former logistics executive with 15+ years experience in supply chain optimization.',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Tech veteran specializing in distributed systems and blockchain technology.',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Emily Watson',
      role: 'Head of Operations',
      bio: 'Operations expert focused on streamlining delivery processes and customer experience.',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      bio: 'Full-stack developer passionate about building scalable logistics solutions.',
      image: '/api/placeholder/150/150'
    }
  ];

  const values = [
    {
      icon: UserGroupIcon,
      title: 'Community First',
      description: 'We believe in empowering communities to solve logistics challenges together.'
    },
    {
      icon: HeartIcon,
      title: 'Fair Rewards',
      description: 'Everyone who contributes to the network earns tokens for their participation.'
    },
    {
      icon: GlobeAltIcon,
      title: 'Sustainable Impact',
      description: 'We\'re reducing carbon footprint by optimizing existing travel routes.'
    },
    {
      icon: LightBulbIcon,
      title: 'Decentralized Innovation',
      description: 'We\'re pioneering a new model where logistics is owned by the community.'
    }
  ];

  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="container-max section-padding">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-display text-3xl lg:text-4xl mb-6 text-gray-900">
            About <span className="text-gradient-premium">ShipShift</span>
          </h2>
          <p className="text-body text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're building a decentralized logistics ecosystem where community members earn tokens by helping
            transport packages along their daily routes. Our colony-based network turns everyday commutes into income opportunities.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            className="bg-gradient-to-br from-olive-50 to-white p-8 rounded-2xl border border-olive-100"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-subheading text-2xl mb-4 text-gray-900">Our Mission</h3>
            <p className="text-body text-gray-600 leading-relaxed">
              To create a sustainable, community-driven logistics network where people earn tokens by helping
              their neighbors ship packages, making delivery more affordable and environmentally friendly.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-subheading text-2xl mb-4 text-gray-900">Our Vision</h3>
            <p className="text-body text-gray-600 leading-relaxed">
              A world where every commute contributes to the community, where logistics is powered by neighbors
              helping neighbors, and where everyone benefits economically from the delivery ecosystem.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-subheading text-2xl text-center mb-12 text-gray-900">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-olive-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-olive-600" />
                </div>
                <h4 className="text-subheading text-lg mb-2 text-gray-900">{value.title}</h4>
                <p className="text-body text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-subheading text-2xl text-center mb-12 text-gray-900">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="text-center bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-olive-100 to-olive-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-olive-600 font-bold text-xl">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h4 className="text-subheading text-lg mb-1 text-gray-900">{member.name}</h4>
                <p className="text-olive-600 font-medium text-sm mb-3">{member.role}</p>
                <p className="text-body text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
