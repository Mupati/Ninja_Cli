import showBlogs from './components/showBlogs.vue';
import addBlog from './components/addBlog.vue';
import singleBlog from './components/singleBlog.vue';
import loginForm from './components/loginForm.vue';
import signupForm from './components/signupForm.vue';
import dashboard from './components/dashboard.vue';
import errorPage from './components/errorPage.vue';

export default [
	
	{
		path: '/',
		name:'allBlogs',
		component: showBlogs,
		meta:
			{
				'title': 'All Articles - Ninja_Cli'
			}
	},

	{
		path: '/add',
		name: 'newBlog',
		component: addBlog,
		meta:
			{
				'title': 'Add New Post - Ninja_Cli'
			}
	},

	{
		path: '/post/:id',
		name: 'singleBlog',
		component: singleBlog,
		meta:
			{
				'title': 'Single Post - Ninja_Cli'
			}
	},

	{
		path: '/login',
		name: 'logIn',
		component: loginForm,
		meta:
			{
				'title': 'Sign in - Ninja_Cli'
			}
	},

	{
		path: '/register', 
		name: 'signUp',
		component: signupForm,
		meta:
			{
				'title': 'Sign up - Ninja_Cli'
			}
	},

	{
		path: '/dashboard',
		name: '',
		component: dashboard,
		meta:
			{
				'title': 'Welcome to Your Dashboard'
			}
	},

]