<script lang="ts" ✂prettier:content✂="CgkvLyBEZWZpbmUgeW91ciBsaXN0IG9mIGNvdW50cmllcyB3aXRoIHRoZWlyIGZsYWdzIGFuZCBjb2RlcwoJaW1wb3J0IHsgZ290byB9IGZyb20gJyRhcHAvbmF2aWdhdGlvbic7CglpbXBvcnQge2ZhZGUsIGZseX0gZnJvbSAnc3ZlbHRlL3RyYW5zaXRpb24nOwoJaW1wb3J0IHtpc0Rpc3BsYXllZH0gZnJvbSAnJGxpYi9zdGF0ZXMuc3ZlbHRlJzsKCgljb25zdCBjb3VudHJpZXMgPSBbCgkJeyBuYW1lOiAnU3dlZGVuJywgY29kZTogJys0NicsIGZsYWc6ICfwn4e48J+HqicgfSwKCQl7IG5hbWU6ICdVbml0ZWQgU3RhdGVzJywgY29kZTogJysxJywgZmxhZzogJ/Cfh7rwn4e4JyB9LAoJCXsgbmFtZTogJ0dlcm1hbnknLCBjb2RlOiAnKzQ5JywgZmxhZzogJ/Cfh6nwn4eqJyB9LAoJCXsgbmFtZTogJ0ZyYW5jZScsIGNvZGU6ICcrMzMnLCBmbGFnOiAn8J+Hq/Cfh7cnIH0sCgkJeyBuYW1lOiAnVW5pdGVkIEtpbmdkb20nLCBjb2RlOiAnKzQ0JywgZmxhZzogJ/Cfh6zwn4enJyB9CgldOwoJLy8gWW91IG1pZ2h0IG1hbmFnZSBzZWxlY3RlZCBjb3VudHJ5IHdpdGggc3RhdGUgb3IgcHJvcHMKCWxldCBzZWxlY3RlZENvdW50cnkgPSBjb3VudHJpZXNbMF07CgoJZnVuY3Rpb24gY2xvc2VQb3B1cCgpIHsKCQlpc0Rpc3BsYXllZC52aXNpYmxlID0gIWlzRGlzcGxheWVkLnZpc2libGU7Cgl9Cg==">{}</script>

<section
	in:fly={{ y: 300, duration: 500 }}
	out:fly={{ y: 300, duration: 250 }}
	class="z-50 fixed w-full flex items-end bottom-0"
>
	<div class="bg-[#1A1A2E]/90 text-[#E0E0E0] w-full relative h-[70%] p-4 rounded-t-xl">
		<button onclick={closePopup} class="absolute top-4 left-4">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="size-5"
			>
				<path
					d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
				/>
			</svg>
		</button>
		<div class="flex justify-center flex-col items-center py-6 gap-2">
			<img src="/lock-front-gradient.png" class="h-auto w-24" alt="" />
			<div class="flex flex-col items-center gap-1 mt-4">
				<h1 class="font-sans font-semibold text-3xl">Your data protected!</h1>
				<h3 class="text-sm text-wrap text-[#B0B0B0]">
					Enter your phone number. We will send you a confirmation
				</h3>
			</div>
			<div class="flex flex-col items-center gap-6 overflow-hidden">
				<div class="relative flex mt-4 gap-2 rounded-md shadow-sm">
					<div>
						<div class="relative">
							<button
								type="button"
								class="relative w-[7rem] cursor-default bg-zinc-200 text-black rounded-xl py-2.5 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset ring-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
								aria-haspopup="listbox"
								aria-expanded="true"
								aria-labelledby="listbox-label"
							>
								<span class="block truncate">🇸🇪 +46</span>
								<span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
									<svg
										class="h-5 w-5 text-gray-400"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
											clip-rule="evenodd"
										/>
									</svg>
								</span>
							</button>

							<!--
                Select popover, show/hide based on select state.
          
                Entering: ""
                  From: ""
                  To: ""
                Leaving: "transition ease-in duration-100"
                  From: "opacity-100"
                  To: "opacity-0"
              -->
							<!--              <ul class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">-->
							<!--                &lt;!&ndash;-->
							<!--                  Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.-->
							<!--          -->
							<!--                  Highlighted: "bg-indigo-600 text-white", Not Highlighted: "text-gray-900"-->
							<!--                &ndash;&gt;-->
							<!--                {#each countries as country, index}-->
							<!--                  &lt;!&ndash;                      on:click={() => selectedCountry = country}&ndash;&gt;-->
							<!--                  -->
							<!--                  <li-->
							<!--                      class="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"-->
							<!--                      id={"listbox-option-" + index}-->
							<!--                      role="option"-->
							<!--                      class:selected="{country === selectedCountry}"-->
							<!--                  >-->
							<!--                    &lt;!&ndash; Display flag and country code &ndash;&gt;-->
							<!--                    <span class="block truncate font-normal">{country.flag} {country.code}</span>-->
							<!--                    -->
							<!--                    &lt;!&ndash; Checkmark, only display for selected option &ndash;&gt;-->
							<!--                    {#if country === selectedCountry}-->
							<!--        <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">-->
							<!--          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">-->
							<!--            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />-->
							<!--          </svg>-->
							<!--        </span>-->
							<!--                    {/if}-->
							<!--                  </li>-->
							<!--                {/each}-->
							<!--                -->
							<!--                &lt;!&ndash; More items... &ndash;&gt;-->
							<!--              </ul>-->
						</div>
					</div>

					<input
						type="text"
						name="phone-number"
						id="phone-number"
						class="block rounded-xl bg-zinc-200 w-full outline-none ring-1 ring-inset ring-gray-700 border-0 py-1.5 focus:outline-none focus:ring-0 text-gray-900 placeholder:text-gray-500 focus:bg-zinc-100 sm:text-sm sm:leading-6"
						placeholder="(73) 987-6543"
					/>
				</div>
				{#if isDisplayed.isRegister}
					<button
							in:fade={{ duration: 500 }}
							onclick={() => {
							goto('/onboarding');
						}}
							type="button"
							class="w-full rounded-full bg-amber-400 px-4 py-3 text-sm font-semibold text-black shadow-sm hover:bg-purple-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
					>
						Sign up
					</button>
				{:else}
					<button
							in:fade={{ duration: 500 }}
							onclick={() => {
							goto('/onboarding');
						}}
							type="button"
							class="w-full rounded-full bg-amber-400 px-4 py-3 text-sm font-semibold text-black shadow-sm hover:bg-purple-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
					>
						Log in
					</button>
				{/if}
				
				<div class="relative w-full">
					<div class="absolute inset-0 flex items-center" aria-hidden="true">
						<div class="w-full border-t border-gray-600"></div>
					</div>
					<div class="relative flex justify-center">
						<span class="px-2 text-sm bg-gray-200 text-black rounded-lg">or</span>
					</div>
				</div>
				<div class="flex flex-col gap-4 w-full">
					<button
						type="button"
						class="inline-flex w-full justify-center items-center gap-x-2 rounded-xl bg-purple-200 px-4 py-1 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						<img src="/BankID.svg" class="-ml-0.5 h-10 w-auto" alt="" />
						{isDisplayed.isRegister ? 'Log in' : 'Continue'} with BankId
					</button>
					<button
						type="button"
						class="inline-flex w-full justify-center items-center gap-x-2 rounded-xl bg-purple-200 px-4 py-1 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						<img
							src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
							class="-ml-0.5 h-10 w-auto"
							alt=""
						/>
						{isDisplayed.isRegister ? 'Log in' : 'Continue'} with Google
					</button>
					<div class="font-medium text-[#B0B0B0] text-sm flex gap-2 justify-center">
						{isDisplayed.isRegister ? 'Arleady have an account?' : 'Dont have an account?'}
						<button
								onclick={() => {
								isDisplayed.isRegister = false;
							}}
								class="text-amber-300 font-bold"
						>{isDisplayed.isRegister ? 'Log in' : 'Register'}</button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
