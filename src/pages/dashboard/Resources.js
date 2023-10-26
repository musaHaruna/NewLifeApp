import React, { useState } from 'react'
import Wrapper from '../../assets/wrappers/Resources'
import Documents from '../../components/resources-page/Documents'
import { CiSearch } from 'react-icons/ci'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { TiDocumentText } from 'react-icons/ti'
import { FiLink2 } from 'react-icons/fi'
import Photos from '../../components/resources-page/Photos'
import UsefullLinks from '../../components/resources-page/UsefullLinks'

const Resources = () => {
  const [activeTab, setActiveTab] = useState('Documents')

  return (
    <Wrapper>
      {activeTab === 'Documents' && (
        <article className='tab-content'>
          <h2>Documents</h2>
          <div className='search'>
            <CiSearch className='search-icon' />
            <input type='text' placeholder='Search Documents' />
          </div>
        </article>
      )}
      {activeTab === 'Photos' && (
        <article className='tab-content photos'>
          <h2>Photos</h2>
          <div className='photos-search'>
            <div className='search'>
              <CiSearch className='search-icon' />
              <input type='text' placeholder='Search Photos' />
            </div>
            <div className='btn-primary '>
              <HiOutlinePhotograph className='icon' />
              <button>Add Photos</button>
            </div>
          </div>
        </article>
      )}
      {activeTab === 'Useful Links' && (
        <article className='tab-content'>
          <h2>Useful Links</h2>
          <div className='btn-primary '>
            <FiLink2 className='icon' />
            <button>Usefull Links</button>
          </div>
        </article>
      )}
      {activeTab === 'Publications and Research' && (
        <article className='tab-content'>
          <h2>Publications and Research</h2>
          <div className='search'>
            <CiSearch className='search-icon' />
            <input type='text' placeholder='Search Documents' />
          </div>
        </article>
      )}

      <article>
        <section className='tabs'>
          <div
            onClick={() => setActiveTab('Documents')}
            className={`tab-btn ${activeTab === 'Documents' ? 'active' : ''}`}
          >
            <HiOutlineDocumentText className='icon' />
            <h4>Documents</h4>
          </div>
          <div
            onClick={() => setActiveTab('Photos')}
            className={`tab-btn ${activeTab === 'Photos' ? 'active' : ''}`}
          >
            <HiOutlinePhotograph className='icon' />
            <h4>Photos</h4>
          </div>
          <div
            onClick={() => setActiveTab('Useful Links')}
            className={`tab-btn ${
              activeTab === 'Useful Links' ? 'active' : ''
            }`}
          >
            <FiLink2 className='icon' />
            <h4>Useful Links</h4>
          </div>
          <div
            onClick={() => setActiveTab('Publications and Research')}
            className={`tab-btn ${
              activeTab === 'Publications and Research' ? 'active' : ''
            }`}
          >
            <TiDocumentText className='icon' />
            <h4>Publications and Research</h4>
          </div>
        </section>

        <section>
          {activeTab === 'Documents' && <Documents />}
          {activeTab === 'Photos' && <Photos />}
          {activeTab === 'Useful Links' && <UsefullLinks />}
          {activeTab === 'Publications and Research' &&
            'Publications and Research'}
        </section>
      </article>
    </Wrapper>
  )
}

export default Resources
