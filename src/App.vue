<template>
    <b-container>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand to="/">App</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/tasks/stages">Dashboard</b-nav-item>
                    <b-nav-item to="/users">Users</b-nav-item>
                    <b-nav-item to="/playground">Playground</b-nav-item>
                    <AuthStatus />
                </b-navbar-nav>
                <Search />
            </b-collapse>
        </b-navbar>

        <RouterView />
    </b-container>
</template>
