import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const AboutClub = () => {
  return (
    <div className='container'>
      <div className=" grid grid-cols-1 lg:grid-cols-2 space-y-12 md:px-8 lg:px-0">
          <div>
            <h1 className="text-header text-gradient-r">
              About CCSP
            </h1>
          </div>

          <div>
            <p className="subtext mb-6">
              The Committee for Community Service Program (CCSP) at the American
              University of Phnom Penh (AUPP) is a student-led initiative
              committed to fostering social responsibility and community
              engagement. Our mission is to bridge academic learning with
              real-world impact, empowering students to make meaningful
              contributions to Cambodian society through a range of
              community-driven projects.
            </p>

            <Link
              href="/us"
              className="group inline-flex items-center text-[#B22234] hover:underline font-medium"
            >
              See more
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
</div>
  )
}

export default AboutClub
