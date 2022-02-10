/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Modal from 'react-modal/lib/components/Modal';
import '../App.css';
import { AiOutlineClose } from 'react-icons/ai';
const Sidebar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <aside className='sidebar'>
        <div className='logo'>
          <a>
            Brand<b>Colors</b>
          </a>
        </div>
        <div className='description'>
          The biggest collection of official brand color codes around. Curated
          by @brandcolors and friends.
        </div>
        <nav className='menu'>
          <ul>
            <li>
              <a
                href='https://github.com/brandcolors/feedback'
                onClick={toggleModal}
              >
                Suggest a Brand
              </a>
            </li>
            <li>
              <a href='#' onClick={toggleModal}>
                About Brand Colors
              </a>
            </li>
          </ul>
        </nav>
        <a href='#' className='sidebar-ad'>
          <span>
            Brand<strong>Colors</strong> + DesingBombs
          </span>
          <p>
            Learn how to make a website - we have put together an in-depth guide
            that will help you build your first website with WordPress.
          </p>
        </a>
      </aside>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        contentLabel='abc'
        className='about-modal'
        overlayClassName='about-modal-overlay'
      >
        <button className='modal-button' onClick={toggleModal}>
          <AiOutlineClose />
        </button>
        <h3>About BrandColors</h3>
        <p>
          BrandColors was created by <b>DesignBombs</b>. The goal was to create
          a helpful reference for the brand color codes that are needed most
          often.
        </p>
        <p>
          It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot,
          Tuts+, and over <b>2 million pageviews.</b> There are now over{' '}
          <b>600 brands</b> with <b>1600 colors</b> and the collection is always
          growing.
        </p>
      </Modal>
    </>
  );
};

export default Sidebar;
