import React from "react";
import { useState, useContext } from "react";
import ForestBG from "../../assets/company forest.png";
import { PageContext } from "../App";

import Carousel from "./Carousel";

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { CountryOptions } from "./FormElements/CountryOptions";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function AmbassadorsApply() {
  const {} = useContext(PageContext);

  const AmbassadorForm = () => {
    return (
      <div className="BG-lgreen ">
        <div class="max-w-6xl mx-auto p-5 sm:p-16">
          <form>
            <div class="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label
                  for="last_name"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="e.g JohnDoe@xyz.com"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="gender"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Gender
              </label>
              <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div class="flex items-center pl-3">
                    <input
                      id="gender-male"
                      type="radio"
                      value=""
                      name="list-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="gender-male"
                      class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Male
                    </label>
                  </div>
                </li>
                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div class="flex items-center pl-3">
                    <input
                      id="gender-female"
                      type="radio"
                      value=""
                      name="list-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="gender-female"
                      class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Female
                    </label>
                  </div>
                </li>
                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div class="flex items-center pl-3">
                    <input
                      id="gender-none"
                      type="radio"
                      value=""
                      name="list-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="gender-none"
                      class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      I prefer not to say
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <div class="mb-6">
              <label
                for="country"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Country
              </label>

              <CountryOptions />
            </div>

            <div class="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label
                  for="state"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="address"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div class="mb-6">
              <label
                for="phone"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Telephone number
              </label>
              <input
                type="phone"
                id="phone"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="e.g +123840637788"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="linkedin"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                LinkedIn Profile URL
              </label>
              <input
                type="url"
                id="linkedin"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
            <div class="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label
                  for="facebook"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Facebook Profile URL
                </label>
                <input
                  type="url"
                  id="facebook"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="instagram"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Instagram Profile URL
                </label>
                <input
                  type="url"
                  id="instagram"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="twitter"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Twitter Profile URL
                </label>
                <input
                  type="url"
                  id="twitter"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="tiktok"
                  class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                >
                  Tiktok Profile URL
                </label>
                <input
                  type="url"
                  id="tiktok"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div class="mb-6">
              <label
                for="reason"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Why do you want to become a Greeeth Ambassador?
              </label>
              <textarea
                type="text"
                id="reason"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-60 p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Why do you want to become a Greeeth Ambassador? "
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="favtree"
                class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                What is your Favorite Tree?
              </label>
              <textarea
                type="text"
                id="favtree"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-30 p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter the name of your favorite Tree"
                required
              />
            </div>

            <div class="flex w-full items-start mb-6 mt-15">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="remember"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                I agree with the{" "}
                <a
                  href="#"
                  class="text-blue-600 hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </a>
                .
              </label>
            </div>
            <button
              type="submit"
              class="text-white mt-5  bg-lgreen hover:bg-green hover:lgreen focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Apply
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <>
      <section className=" grad-lgreen flex-wrap items-center justify-center  flex flex-col">
        <div className="container h-full  lg:mx-6 my-10 flex flex-col flex-wrap items-center justify-around lg:max-w-9/10 px-2 py-2 lg:ml-12 lg:h-full  lg:items-center lg:flex text-zinc-800">
          <div className="lg:max-w-8/11 text-center darkgreen">
            <h1 className="text-4xl  sm:(text-5xl !leading-tight) font-medium capitalize lgreen">
              Apply to be an Ambassador today
            </h1>

            <p className="mt-10 text-lg sm:leading-relaxed text-bold px-2 sm:text-xl">
              Become our ambassador and encourage tree planting in your
              community, state and country.
            </p>
          </div>
        </div>
      </section>
      <div className="min-h-full">
        <AmbassadorForm />
      </div>
    </>
  );
}

export default AmbassadorsApply;
