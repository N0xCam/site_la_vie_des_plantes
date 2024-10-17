<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'B?QT*-YkaPa|<U8zE|d<#UN%~p@<0d}LaY1$aG>OWPM MFI~j{ch5ibS@NoWy#b;' );
define( 'SECURE_AUTH_KEY',   'eN>*vS^}M)7uzr=mQa-_e;dby_%yL|W:$nvAfq&HpqdZf@]kghUEEC}/ 80fabu?' );
define( 'LOGGED_IN_KEY',     'IooV^GqCFS[re?o37)Xc} eNMrJ_6ibP<[WvvO&I@aLg]a/g ;Ehuqx8.h2=89XB' );
define( 'NONCE_KEY',         'Vi+s(kLS]ab^FLl`fax@vs%(cR>L6n@-Z0^OqOc5a<lmE;[xbc}09~qV]`fc,%o9' );
define( 'AUTH_SALT',         '}E<(Kw,x$5{{Khmk *$IrXgMNX::{s=}:=O4<!Yp&aE@/xMju~{M0EE._rKx40 j' );
define( 'SECURE_AUTH_SALT',  '6QB(0NL~)naMV6xBQCvdooTM~~g)T4|#uX*miI;t7JFqh*y[-j5!P!AGnD$KutHX' );
define( 'LOGGED_IN_SALT',    'g/_*reMj&BI}gf5V2qvF=$2TSG<r1I =^KtOaYq[tGfLq;H]e78KIWF`dU$Khius' );
define( 'NONCE_SALT',        '3p+8,rz>K7YD!E5/$bigUG0iv]ds5Yz%M`B}09&WQ4vAq|XKq[;R@f$+ZMx1[$,U' );
define( 'WP_CACHE_KEY_SALT', 's[c!6;er^h]@!{_ Q=)Xk`p ZoH:!,-J2M[1(BNeQ]9FQ{t1~oy[ZZ/K2e2fwVb#' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
