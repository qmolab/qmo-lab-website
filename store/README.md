# STORE

**This directory is not required, you can delete it if you don't want to use it.**

This directory contains your Vuex Store files.
Vuex Store option is implemented in the Nuxt.js framework.

Creating a file in this directory automatically activates the option in the framework.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/vuex-store).

/*

* level: bitwise flag variable
* b&1 => is/was a post doc
* b&2 => is/was a graduate student
* b&4 => is/was an undergrad
* b&8 => is former student
*
* so b=1 is a current post doc
* b=2 is a current grad student
* b=3 is a current post doc who used to be a grad student
* b=4 is a current undergrad student
* b=5 is a current post doc who was an undergrad, but did grad study elsewhere
* b=6 is a current grad student who also did undergrad here
* b=7 is a current is a current post doc who did undergrad and grad studies here
* b={8,15} repeat of b={1,7} for former students / postdocs

 */
