'use client'
import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import unb from "@/../public/images/unb.avif"
import logo from "@/../public/images/unb-logo.png"

const inter = Inter({ subsets: ["latin"] });

export default function Cadastro() {
    const cadastro = useFormik({
        initialValues: {
        email: '',
        },
        onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={cadastro.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
            id="email"
            name="email"
            type="email"
            onChange={cadastro.handleChange}
            value={cadastro.values.email}
        />

        <button type="submit">Submit</button>
        </form>
    );
}