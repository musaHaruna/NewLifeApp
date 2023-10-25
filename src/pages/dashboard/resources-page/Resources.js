import React, { useState } from 'react'
import Wrapper from '../../../assets/wrappers/Resources'
import Documents from './Documents'

const Resources = () => {
  const [activeTab, setActiveTab] = useState('Documents')

  return (
    <Wrapper>
      {activeTab === 'Documents' && (
        <article>
          <h2>Documents</h2>
          <input type='text' />
        </article>
      )}
      {activeTab === 'Photos' && (
        <article>
          <h2>Photos</h2>
          <input type='text' />
        </article>
      )}
      {activeTab === 'Useful Links' && (
        <article>
          <h2>Useful Links</h2>
          <input type='text' />
        </article>
      )}
      {activeTab === 'Publications and Research' && (
        <article>
          <h2>Publications and Research</h2>
          <input type='text' />
        </article>
      )}

      <article>
        <section>
          <div onClick={() => setActiveTab('Documents')}>
            <p>icon</p>
            <h4>Documents</h4>
          </div>
          <div onClick={() => setActiveTab('Photos')}>
            <p>icon</p>
            <h4>Photos</h4>
          </div>
          <div onClick={() => setActiveTab('Useful Links')}>
            <p>icon</p>
            <h4>Useful Links</h4>
          </div>
          <div onClick={() => setActiveTab('Publications and Research')}>
            <p>icon</p>
            <h4>Publications and Research</h4>
          </div>
        </section>
        <section>
          {activeTab === 'Documents' && <Documents />}
          {activeTab === 'Photos' && 'Photos'}
          {activeTab === 'Useful Links' && 'Useful Links'}
          {activeTab === 'Publications and Research' &&
            'Publications and Research'}
        </section>
      </article>
    </Wrapper>
  )
}

export default Resources
