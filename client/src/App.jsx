import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function ScrollTop(){const {pathname}=useLocation();useEffect(()=>{window.scrollTo(0,0)},[pathname]);return null}
export default function App(){return <><ScrollTop/><Routes><Route element={<Layout/>}><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/skills" element={<Skills/>}/><Route path="/projects" element={<Projects/>}/><Route path="/projects/:slug" element={<ProjectDetail/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Route></Routes></>}
