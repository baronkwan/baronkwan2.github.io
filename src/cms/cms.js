import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPage from './components/about'
import BlogPage from './components/blog'
import ContactPage from './components/contact'
import IndexPage from './components/index'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPage)
CMS.registerPreviewTemplate('about', AboutPage)
CMS.registerPreviewTemplate('products', ContactPage)
CMS.registerPreviewTemplate('blog', BlogPage)