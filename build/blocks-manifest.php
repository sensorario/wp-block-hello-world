<?php
// This file is generated. Do not modify it manually.
return array(
	'wp-block-hello-world' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/wp-block-hello-world',
		'version' => '0.1.0',
		'title' => 'Il blocco di Simone',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'typography' => array(
				'fontSize' => true
			)
		),
		'textdomain' => 'wp-block-hello-world',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'counter' => array(
				'type' => 'number',
				'default' => 0
			),
			'content' => array(
				'type' => 'string',
				'default' => ''
			)
		)
	)
);
