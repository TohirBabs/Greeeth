import * as React from "react";

function SvgComponent({ small }) {
  return (
    <svg
      width={small ? "55" : "150"}
      height={small ? "30" : "100"}
      viewBox="0 0 250 216"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 196.857V197.765C3.05482 197.655 4.7336 196.417 6.88023 195.949C10.1277 195.261 10.2378 195.949 14.1733 194.655L21.3012 193.142C29.7776 191.546 34.4011 190.72 43.4005 189.454C50.8587 188.381 67.096 187.252 75.2422 186.592C80.5537 186.179 85.9753 185.766 91.5346 185.408C116.854 183.895 132.321 183.675 157.75 185.711C160.227 185.904 163.502 186.289 165.896 186.317L190.142 188.023C195.398 188.683 200.187 189.482 205.389 190.004C207.865 190.252 210.397 190.665 212.902 190.968C215.626 191.298 218.268 191.573 220.8 191.903C225.974 192.591 245.376 197.903 250 197.297V196.444C249.395 195.426 234.863 189.564 231.781 189.014C229.882 188.683 226.58 188.243 225.259 187.335C225.369 186.509 225.754 186.399 226.249 185.931C227.185 185.023 228.203 182.409 229.112 181.088C231.644 177.427 236.928 165.098 238.331 160.282L240.725 152.411C243.698 141.788 244.441 138.265 244.468 126.238C244.468 124.56 244.661 122.881 244.661 121.12C244.661 119.358 244.496 117.707 244.496 116.001C244.441 113.249 244.055 109.451 243.643 106.946C241.606 94.5344 239.68 86.5533 235.001 75.2422C232.937 70.2884 230.845 66.1603 228.424 61.812C223.718 53.2805 215.847 42.7675 208.994 35.9148C204.783 31.6491 200.435 27.7961 195.646 24.1634C191.821 21.3012 190.417 20.4756 186.729 17.9436C185.684 17.2281 184.583 16.6777 183.537 16.0447C172.363 9.49472 160.172 4.40335 147.319 2.11911C142.035 1.1834 135.953 0.0275209 129.871 0H118.725C105.873 0.0825627 90.6264 4.12814 78.7098 9.16446C75.1046 10.7056 67.4262 14.6411 64.0136 16.7878C63.4907 17.118 62.8027 17.5859 62.2798 17.8886C61.6193 18.2739 61.3166 18.6041 60.6286 19.017C57.3811 20.9985 50.9963 25.8972 48.0515 28.5667C34.0984 41.1713 23.2001 55.2345 15.1365 73.2882C11.779 80.8014 8.47644 89.6907 6.77015 98.0295C6.13716 101.194 4.65103 114.9 4.65103 118.037C4.59599 121.808 4.62351 124.835 4.89872 128.578C5.31154 134.88 6.88023 141.843 7.73338 148.118C8.53148 153.924 11.5588 159.539 13.3752 164.713C15.4117 170.547 15.3567 171.29 18.384 176.409C18.9894 177.482 19.6775 178.803 20.2829 180.097C21.6314 182.987 24.8514 185.326 23.4478 186.895C22.8424 187.555 16.6502 189.537 15.2741 189.894C12.2743 190.692 4.04557 193.527 1.43109 195.564L0 196.857ZM71.1416 149.989L69.5454 150.402C70.7012 153.292 73.5634 151.998 76.7558 152.191L76.5632 153.567C77.9392 153.181 77.3888 152.438 79.9207 152.659C81.3793 152.796 82.5352 153.347 84.0213 153.374L83.2233 149.961C83.0856 149.576 83.1957 149.769 83.0306 149.411C82.8655 149.081 82.8655 149.081 82.7004 148.888C80.939 149.163 81.4894 150.429 79.2327 150.237L78.4071 148.64C78.3796 148.585 78.3245 148.503 78.297 148.448C77.5815 148.448 71.5269 148.228 71.4718 148.64L71.1416 149.989ZM84.8195 149.934C85.4249 150.154 86.0579 150.319 86.4157 150.87C86.7184 151.282 86.6634 151.338 86.7459 151.668L87.0487 152.603C87.0487 152.659 87.0762 152.741 87.1312 152.796C87.2688 152.769 92.9932 151.695 93.0207 151.695C95.2224 150.787 94.2316 148.31 96.1856 147.76C97.2864 148.585 97.6717 150.567 98.3873 151.943C99.5982 151.998 99.5432 151.668 100.451 151.365C101.717 150.952 101.607 151.475 102.791 151.448C102.873 150.512 102.103 148.503 101.717 147.677C93.9839 147.319 98.69 143.907 99.0203 140.577C96.8461 140.825 95.4425 144.347 91.7272 144.732C90.3787 144.898 90.5438 144.732 89.8008 145.668C88.3146 147.512 86.5808 148.007 85.6451 148.696C84.4617 149.549 85.2048 148.64 84.8195 149.934ZM81.9848 215.764H86.1955L86.2505 201.013C88.8375 200.655 95.1398 201.371 96.9837 200.765V196.582C95.1398 196.252 90.6264 196.499 88.5073 196.499C85.3424 196.499 83.7461 196.472 82.4251 198.949C81.4619 200.738 81.7646 212.957 81.9848 215.764ZM176.519 215.681V211.443L169.116 211.333V201.04L176.409 200.958L176.519 196.582C174.207 196.252 171.235 196.995 169.254 196.334C168.703 194.6 169.501 192.041 168.978 190.115L164.905 190.087C164.63 191.463 164.795 206.132 164.795 208.774C164.795 211.801 164.878 214.168 167.382 215.406C168.566 216.012 174.923 215.984 176.519 215.681ZM178.941 215.764L183.344 215.792V200.958L193.692 200.93L193.83 215.709L198.178 215.792C198.178 212.599 198.646 201.26 197.765 199.196C196.719 196.775 194.821 196.499 191.931 196.499C189.151 196.499 186.124 196.609 183.372 196.472L183.344 190.142H178.996L178.941 215.764ZM118.175 215.681L118.202 211.443L103.231 211.333L103.286 208.443L118.12 208.388C118.257 206.737 118.34 201.15 117.955 199.774C117.184 197.05 115.037 196.499 112.698 196.499C109.836 196.472 106.946 196.472 104.084 196.499C97.424 196.527 98.9927 202.939 98.9927 208.774C98.9927 216.92 101.717 215.792 109.423 215.792C111.707 215.792 116.138 216.039 118.175 215.681ZM113.744 203.792L113.771 200.985L103.341 200.93C102.818 204.618 103.369 203.875 106.864 203.875C108.708 203.875 112.093 204.068 113.744 203.792ZM161.548 215.792V211.361H146.604L146.659 208.416L161.52 208.388C161.658 206.489 161.768 201.453 161.328 199.912C160.64 197.463 158.851 196.472 156.154 196.499C153.264 196.499 150.402 196.499 147.54 196.499C140.797 196.499 142.311 202.747 142.311 208.774C142.311 211.773 142.311 213.865 144.567 215.241C146.384 216.342 158.493 215.847 161.548 215.792ZM146.631 203.792L157.034 203.875L157.062 200.958L146.714 200.93L146.631 203.792ZM139.834 215.736L139.861 211.388L124.972 211.361V208.471L139.724 208.416C139.999 207.26 139.971 201.233 139.724 200.05C139.173 197.655 137.329 196.499 134.522 196.499C131.66 196.499 128.798 196.499 125.936 196.499C119.138 196.499 120.624 202.251 120.624 208.554C120.624 211.443 120.376 213.672 122.798 215.186C124.67 216.342 128.495 215.792 131.055 215.792C133.669 215.792 137.329 216.012 139.834 215.736ZM124.945 203.737C125.991 204.068 133.862 203.958 135.375 203.82V200.958H124.972L124.945 203.737ZM78.4896 202.279L68.9124 202.196L68.8298 206.682L74.0588 206.71L74.0863 211.306L59.5277 211.361V196.334H74.0037L74.0863 198.398H78.5722C78.5172 195.866 78.5447 191.986 73.8937 191.848C71.5544 191.793 59.225 191.408 57.4912 192.399C56.2803 193.114 55.4271 194.133 55.207 195.839C55.0143 197.215 54.9317 210.975 55.317 212.434C55.7023 213.893 56.8307 215.159 58.0416 215.544C59.6378 216.067 66.9584 215.792 69.2426 215.792C73.2607 215.792 76.5907 216.342 78.1044 213.232C78.8474 211.746 78.6823 204.48 78.4896 202.279ZM31.8142 185.629L33.8782 185.381C33.9333 184.17 32.8049 183.069 32.3096 182.244C31.6766 181.28 31.2087 180.455 30.5207 179.381C29.2823 177.4 28.1814 175.363 27.0531 173.354C26.5026 172.336 26.0623 171.263 25.5394 170.189C24.989 169.089 24.4936 168.07 23.9982 166.914C17.5033 151.805 14.1733 135.871 14.3659 119.248C14.531 105.13 18.0537 89.1403 23.8331 76.343C25.9247 71.7195 26.4476 71.1691 28.7043 66.8758C30.6858 63.0779 33.3553 58.9773 36.1625 55.262C40.1255 50.033 40.4282 49.4551 44.8041 44.8316C51.0788 38.2816 57.6563 32.6123 65.6649 27.576C69.3252 25.2917 74.0588 22.4846 78.0218 20.8333C82.5627 18.9619 86.801 16.9529 91.7272 15.5218C109.753 10.2103 123.431 9.24703 142.421 11.7239C153.071 13.1275 168.29 18.8518 177.675 23.9982C187.39 29.3098 197.683 37.2633 204.535 44.8041C208.939 49.6477 209.021 49.5101 213.232 55.1519C227.681 74.5542 236.652 100.837 234.698 128.578C233.763 142.283 232.249 147.512 228.121 160.117C227.048 163.392 223.773 170.437 222.231 173.272C220.828 175.804 215.902 183.702 215.489 185.904C218.791 185.518 222.479 177.675 223.965 174.758C227.075 168.676 230.598 161.025 232.442 154.31C233.13 151.778 233.735 148.943 234.506 146.521C235.992 141.815 236.542 134.577 237.038 129.596C238.469 115.12 235.166 91.8648 229.387 79.2052C226.993 73.9487 225.919 71.1691 223.14 65.9676C218.736 57.8214 212.517 49.4 206.82 43.428C198.068 34.236 185.436 24.356 173.272 18.8243C172.116 18.3014 171.318 17.8336 169.914 17.2831C168.731 16.8153 167.823 16.3199 166.639 15.7695C164.465 14.8063 161.713 14.0081 159.511 13.155C157.117 12.1918 154.365 11.7514 151.915 10.9533C148.42 9.82497 139.448 8.33884 135.238 8.11867C113.716 6.96279 96.6259 9.30207 77.5815 17.9436C74.334 19.4298 67.9491 23.1451 65.087 24.9064C30.4106 46.4003 9.76993 86.1955 12.1642 127.614C12.8247 139.173 15.4117 150.209 18.7142 159.814C20.8884 166.116 21.9066 167.465 24.6312 173.382C25.9522 176.244 30.1904 183.289 31.8142 185.629ZM16.8153 121.12C16.8153 127.367 17.063 135.485 18.6592 141.485C20.2279 147.347 20.448 150.952 22.7598 157.392C24.8789 163.309 27.5484 169.116 30.328 174.73C30.8509 175.804 31.6215 176.739 32.227 177.868C33.3003 179.849 34.8965 182.299 36.0524 184.308C38.9696 184.445 43.0702 181.941 45.6022 180.757C47.0608 180.042 49.2074 179.657 50.666 179.244C54.2988 178.225 58.8122 181.968 61.2891 179.436C64.1513 176.519 73.9212 174.152 76.343 174.428L76.4256 176.244C77.4714 175.996 77.9392 175.116 78.5997 174.428C79.7281 173.327 80.1684 173.905 81.4344 174.29C83.5535 174.895 90.3787 170.657 92.5528 169.336C96.1856 167.162 94.2041 170.134 98.635 169.089L103.726 168.043C105.873 167.685 104.772 168.18 105.295 168.511C106.533 169.254 110.854 168.043 112.065 167.768C112.643 167.63 114.9 167.079 115.203 167.135C116.138 167.3 116.496 168.676 117.679 168.4C117.872 168.345 120.129 167.052 120.321 166.859C120.982 166.226 121.422 165.015 121.147 163.777C120.679 161.603 119.633 159.869 118.835 158.025C117.955 156.044 116.744 154.64 115.946 152.741C114.019 148.063 114.68 145.393 109.231 142.999C107.387 142.201 105.268 141.32 103.203 140.852C97.0387 139.476 100.589 137.742 91.6722 142.889C90.8465 143.384 89.6631 143.742 88.7274 144.155C86.4982 145.09 87.1863 144.127 85.7276 143.467C84.159 144.155 83.2233 145.283 81.1317 146.053C80.2785 146.384 76.2329 147.622 75.5174 147.595C75.1321 147.182 74.6918 146.301 74.1138 146.109C72.5727 146.191 71.8021 147.237 70.5361 147.264C70.5361 146.246 71.4993 144.925 71.6369 143.356C69.793 143.907 69.738 146.659 67.6739 144.072C66.1328 142.09 66.1878 141.98 65.5548 139.201C64.9218 139.641 64.8118 139.861 64.5916 140.88C64.454 141.623 64.454 142.421 64.0962 142.944C63.5458 143.549 61.6468 142.889 60.9863 142.806C59.28 142.586 59.4177 142.586 58.7572 141.127C57.5462 138.485 60.1882 138.265 60.5735 135.596C58.8122 135.761 58.3168 136.201 57.1059 136.696C55.8675 137.219 55.0969 136.366 53.9685 135.898C54.3263 135.018 53.9135 135.816 54.3813 135.348C54.9042 134.825 55.1244 135.403 55.207 134.247C52.8952 134.33 51.9595 135.238 52.2072 131.522C55.6198 130.257 57.1059 130.945 58.6471 127.477C59.1424 126.293 59.9956 125.33 60.9038 124.395C62.4174 122.798 61.8395 122.936 64.509 122.633C70.0132 122.028 74.5542 118.147 76.3705 119.083C77.2787 119.578 78.4621 120.982 79.7006 121.202C80.4712 120.817 80.939 120.184 81.7096 119.633C85.7276 116.744 91.8373 116.579 96.3782 118.34C98.5249 119.193 101.057 118.423 103.011 117.734C102.708 116.991 101.635 116.028 100.589 116.001C99.5431 115.973 99.1028 117.019 97.8093 117.212C95.9654 115.643 96.4333 114.707 93.5161 114.267C92.2226 114.047 91.6447 113.882 90.6264 113.496C86.1955 111.707 88.9476 112.093 84.3791 115.588C79.4254 119.331 79.9483 118.918 77.3613 114.982C74.1138 114.872 73.701 119.028 66.4905 116.634C66.5181 114.762 70.0132 113.304 70.2609 111.707C67.7015 112.01 65.4172 113.964 60.9313 114.047C61.3992 112.395 63.5458 112.093 64.3439 110.662C64.7567 109.946 64.509 108.653 64.3164 107.882C64.1788 107.414 64.0412 107.194 63.9586 106.671C63.3807 103.671 66.0502 105.433 67.6189 103.947C68.362 103.231 68.9399 102.46 69.8756 101.58C70.1233 99.5982 69.6004 98.057 70.0132 95.9654C70.6737 92.718 71.8846 94.3417 72.325 92.2501C70.7288 92.3327 70.1783 92.8281 68.9949 93.0757C68.5271 92.1125 68.6372 90.6539 68.6096 89.3879C67.5088 89.6356 67.5914 89.9934 66.8483 90.819C64.9769 92.9106 65.5823 92.5804 67.3712 94.3967C68.0867 95.1398 68.8298 95.415 69.1601 96.4883C68.0592 97.6993 63.6834 99.4881 62.3349 99.6532C62.0321 99.0203 58.7847 93.7362 58.3168 93.5161C57.3536 93.9564 56.3078 96.2682 55.0694 96.7085L51.9595 91.5896C52.4824 90.764 53.5832 90.6814 53.9135 89.7457C53.0603 88.8375 51.0238 88.3146 50.9412 86.9386C52.9778 85.9478 58.8397 85.0121 59.2801 84.3791C58.7296 82.6453 54.7941 83.8287 53.1979 83.7737L52.8952 83.2233C52.4549 82.2875 51.6017 78.8474 51.6292 77.9392L54.6841 77.9943C54.4639 76.3155 53.5282 75.8752 53.5282 74.4991L58.6195 74.7193C58.3994 73.8111 58.6471 74.2514 57.904 73.6185C56.9683 72.8204 55.4271 72.2149 55.262 70.8939C59.2801 69.5729 60.7937 71.5269 64.1237 71.5819L63.5458 68.7748C66.1052 69.0775 66.8208 70.6187 72.7653 69.738C75.0771 69.3802 80.7739 67.151 83.1132 66.1603C83.4985 65.9952 83.8012 65.8851 84.269 65.6924C85.0121 65.3622 84.9571 65.5273 85.3148 64.8668C83.7186 64.8668 82.3976 65.1145 81.0491 65.4998C76.288 66.8758 77.5539 64.8393 72.8203 65.775C71.7746 65.9676 69.1325 66.2979 68.1418 66.1878C68.3895 63.9861 72.0222 63.2706 73.8386 62.4725C73.8386 61.7845 72.6552 59.1975 71.9947 59.1975L68.9399 59.9681C69.2151 61.0964 69.5178 60.6011 69.7105 61.867C67.6464 62.6926 62.0597 62.1422 60.7111 60.4359C60.9863 59.3351 63.188 58.0967 63.0504 57.1885C62.4174 56.1152 60.7937 55.5372 60.491 54.8492C62.1147 53.941 68.3895 56.0051 70.2884 55.95L69.6554 51.932L77.5264 52.0421C75.022 49.5377 75.2697 52.3173 75.3798 46.1251C77.0035 46.1526 80.1684 46.8131 81.2142 46.5654C82.0398 46.3727 82.6453 45.9875 83.8562 45.9049C87.2413 45.6297 85.9203 47.3635 88.5623 44.4188C89.1678 43.7583 90.186 43.428 90.4612 42.9326C88.755 42.795 87.3514 42.8501 85.8377 42.4923C84.5993 42.1896 83.0031 41.6667 82.3701 40.6759C82.6453 40.3732 82.3701 40.5658 82.8104 40.3181C83.8838 39.6576 88.9201 38.6669 90.2411 38.3642C92.2226 37.9513 91.5896 38.5293 92.9381 39.1072C93.7087 38.777 94.3692 38.1165 94.5068 37.1808C93.2959 36.0799 89.443 35.9148 90.6814 33.9333C91.6722 32.8875 99.4055 34.2085 100.837 34.3186C102.048 34.4011 103.341 34.2635 104.552 34.3736C105.873 34.4562 117.569 34.7864 117.432 36.245C117.377 36.6854 116.303 36.7955 115.891 37.1257C115.368 37.4835 115.698 37.1808 115.368 37.6486C115.423 37.6761 115.533 37.6486 115.56 37.7312C115.67 37.9789 119.716 38.0889 120.211 38.2541C120.184 39.6026 118.643 40.7585 118.643 42.0795C119.331 42.5198 121.532 43.5931 122.633 43.6482C122.633 41.474 121.725 40.6209 121.587 38.4192C122.386 38.1715 123.074 38.0064 123.844 37.6486C126.046 36.6579 126.899 37.0982 125.33 34.7864C124.89 34.1535 124.422 33.3829 124.395 32.6398C126.816 32.6123 129.679 33.8507 132.21 34.181C133.146 34.2911 140.935 34.8965 140.935 34.924C141.347 35.3644 140.99 34.6764 141.182 35.3919C141.898 38.4742 140.494 37.8137 146.384 37.511C148.943 37.3734 148.338 38.4742 150.099 39.2173C150.925 38.777 151.503 38.0064 152.191 37.3184L159.016 40.8135C159.649 41.1988 161.162 42.7125 161.74 43.428C162.649 44.6114 162.098 46.6755 162.236 48.2717C165.263 48.3267 168.676 45.7122 172.391 46.9782C172.556 49.345 169.639 52.1797 169.474 53.5832L174.565 53.0603C174.07 54.0786 172.831 54.574 172.529 55.6748C173.602 56.0876 175.061 56.5555 176.134 56.9683C176.877 57.271 179.244 57.7939 179.546 58.5645C178.363 59.1424 174.015 59.9956 173.712 60.9038C175.308 61.3992 177.07 61.179 178.941 62.0046C180.51 62.6926 181.831 63.9311 181.776 65.8576C178.913 67.4262 177.868 65.4447 172.859 65.5823L173.162 63.4632C170.052 64.1513 171.648 65.9952 168.4 61.3992C167.712 60.4359 166.942 58.9223 165.869 58.537C166.034 60.3259 166.584 62.5826 166.584 64.3989C166.612 65.5548 164.603 68.3895 163.804 68.362C162.896 68.3344 160.64 65.9126 160.199 64.9218C159.814 64.0412 160.199 63.876 159.401 63.6008L159.071 66.1328C158.906 66.6832 158.19 66.5456 157.557 66.5731C156.897 66.6281 156.181 66.6006 155.521 66.6281C155.053 65.9401 154.42 65.4447 154.035 64.5641C152.769 64.3989 150.98 64.509 150.127 65.1145C148.833 66.0227 148.751 66.5731 147.319 67.096C146.274 66.5731 143.687 63.0229 142.889 63.0779C142.503 63.2706 140.357 64.8668 140.219 65.087C140.302 65.72 141.678 67.5363 142.421 67.5363C143.659 67.5639 144.347 65.9676 146.081 67.041C146.604 67.3437 146.714 67.784 147.43 67.6739C148.145 67.5914 148.393 67.2886 149.631 67.2336C151.475 67.151 152.603 67.4813 153.952 67.9767C153.842 69.5178 153.236 69.4903 153.126 70.8664C155.438 70.6737 158.053 69.5729 160.667 70.2884L160.695 73.5634C166.144 73.5909 167.96 70.4535 169.611 70.1508C170.492 70.8939 171.455 72.7103 171.951 73.7836C175.749 74.1689 173.547 72.1048 181.335 75.1871C182.271 75.5724 183.427 75.7926 184.142 76.4806C183.922 77.3338 183.895 77.4163 183.317 77.9668C182.519 77.664 182.629 77.5264 182.051 77.0586C181.583 76.6458 181.335 76.5357 180.757 76.7008C179.849 76.9485 178.721 77.6365 177.895 77.9943L178.611 78.4621C178.638 78.4621 179.409 78.7098 179.464 78.7098C179.657 80.3336 178.831 81.4344 178.858 83.0031C178.913 84.5993 178.666 81.9298 178.913 83.3884C179.106 84.4067 182.629 84.6543 185.188 85.7827C186.289 86.2506 186.041 86.168 186.674 87.1312C188.05 89.2503 190.417 91.507 188.656 95.0573C186.454 94.9472 186.151 92.0299 184.032 91.5621C184.197 94.3967 184.913 96.8186 184.858 100.066C182.133 100.176 179.189 99.8734 176.987 99.0203C177.07 98.1671 177.4 98.4974 178.115 97.7543C178.225 97.6717 178.583 97.2589 178.666 97.1764C179.574 96.1306 179.299 95.1948 178.225 94.1491C177.537 93.4885 171.896 92.0024 171.098 91.9199L171.731 95.9379C167.933 98.1946 168.593 99.9835 163.144 99.2679C160.805 98.9652 157.943 98.5524 155.713 97.5616C154.998 97.2314 154.502 96.8736 153.704 96.8461C153.071 101.47 154.943 98.1121 162.401 101.827C163.254 102.268 163.584 102.158 163.722 103.203C164.245 106.919 159.759 104.194 158.686 103.506L158.218 104.91C157.31 104.91 156.456 104.662 155.603 104.992C155.548 104.992 155.493 105.047 155.438 105.075C156.594 106.121 158.988 106.121 161.025 106.038C163.227 105.928 165.401 105.433 167.3 106.396L167.492 105.983C168.153 104.442 168.621 104.91 170.382 105.047C174.18 105.405 178.556 105.378 181.418 107.854C181.225 109.451 179.271 110.166 178.803 111.597C180.317 112.588 183.73 111.845 185.133 108.79C189.014 108.79 194.353 108.02 195.371 111.597C194.903 112.313 193.279 113.304 193.197 114.019L197.628 113.799C197.463 114.487 195.343 117.459 194.49 117.432C193.197 117.377 189.096 111.928 182.932 113.441C182.904 114.625 183.702 114.377 184.968 115.037C186.867 116.056 191.408 117.019 192.729 118.56C192.371 119.386 192.013 119.303 191.105 119.688C190.637 119.881 190.087 120.101 190.032 120.679C191.656 120.899 196.087 122.165 197.435 122.798C197.408 125.165 197.352 125.138 195.646 125.991C194.71 126.459 193.72 127.972 193.775 129.266C194.518 129.706 195.976 129.844 196.252 130.642C195.371 130.972 194.05 130.669 193.059 130.752C189.922 130.945 192.674 134.963 190.142 135.843C189.261 136.146 188.518 136.394 187.72 136.669C186.619 137.054 186.867 137.467 185.574 137.467C184.308 135.403 185.408 133.614 181.693 134.109C180.922 135.293 181.143 136.917 180.455 138.32C179.657 139.944 178.06 139.393 176.877 138.513C174.84 136.972 175.281 138.375 174.317 135.706C173.905 134.522 172.749 133.531 171.373 133.559C171.29 135.238 172.914 134.715 171.923 137.109C171.345 138.485 170.877 139.283 170.327 140.659C169.859 141.898 168.428 142.283 166.832 142.338C164.162 142.421 165.043 141.017 164.245 139.751C163.832 139.311 162.649 139.338 162.098 139.036C162.346 137.384 163.474 137.99 163.832 136.421C160.97 135.293 159.786 136.091 156.897 135.733L158.19 130.201L160.144 130.504C159.346 126.183 156.401 130.669 154.31 130.449C153.181 130.312 153.292 129.431 151.805 129.789C150.594 130.064 150.897 130.559 149.026 130.559C148.64 130.036 147.127 128.605 146.604 128.137C143.714 125.578 139.063 130.834 138.705 134.137C141.045 133.394 142.311 130.642 143.824 129.706C145.943 129.899 148.998 132.981 149.521 135.073C149.494 135.596 148.888 135.981 148.558 136.311C148.145 136.724 147.842 137.027 147.43 137.384C147.567 139.228 148.943 139.669 148.806 141.237C147.017 141.265 145.365 140.219 144.292 139.228C142.668 137.77 140.852 139.311 138.705 139.063C137.439 137.109 136.779 136.669 133.724 136.834C130.009 143.136 128.192 140.274 128.027 150.182C127.972 154.585 128.247 164.327 129.679 167.575C131.055 167.575 132.155 167.41 133.394 167.823C135.128 168.428 135.045 167.768 136.394 167.245C136.944 167.933 137.219 169.171 137.55 170.024C138.21 169.942 139.366 169.144 140.467 168.868C143.411 168.07 141.678 168.153 143.136 167.3L143.769 168.4C143.962 169.033 143.962 169.226 144.182 169.832L148.118 169.336C148.118 170.189 147.952 170.52 148.228 171.07C149.851 170.299 149.053 168.813 151.833 168.428C152.659 168.318 154.145 167.988 154.778 167.988C156.071 167.933 156.071 168.373 157.475 168.621C160.722 169.144 158.796 170.74 161.3 171.153C163.447 171.51 164.052 172.749 165.456 171.813C166.089 171.428 165.263 171.786 166.116 171.4C168.483 172.419 166.914 172.721 170.547 172.666C173.74 172.611 173.272 173.024 175.666 173.409C176.216 172.474 175.501 172.859 176.354 172.253C177.592 172.859 177.537 173.905 179.134 174.07C181.06 174.29 182.106 175.171 182.849 175.171C183.344 174.18 183.317 173.96 184.39 173.712L184.748 175.473C185.959 175.226 186.344 173.712 187.748 173.712L188.408 176.739C189.674 177.015 189.564 176.547 190.527 176.629C191.463 176.684 191.38 177.125 192.426 177.4C194.793 177.978 195.178 176.739 196.609 176.437C197.022 177.4 197.215 178.336 197.518 179.464C198.921 179.326 199.829 178.033 201.178 177.895L201.123 181.418C202.334 180.812 202.279 179.051 203.077 178.886C203.985 178.693 209.021 181.886 210.315 182.904L211.388 183.73C211.911 184.198 211.746 184.225 212.379 184.555C213.425 183.785 218.626 175.308 219.672 173.327C221.819 169.144 223.745 165.015 225.616 160.447C229.139 151.723 231.616 139.063 232.414 129.899C233.487 117.872 232.001 106.231 229.745 95.7728C228.671 90.8741 226.882 86.0304 225.286 81.3794C224.488 79.0126 223.525 77.4163 222.452 74.967C222.011 73.9487 221.378 73.1231 220.883 71.9672C219.039 67.6739 216.232 63.9311 213.893 60.0231C211.581 56.1427 206.462 50.5834 203.49 47.0332C197.82 40.2356 187.803 32.8049 180.317 28.1264L171.29 23.2277C162.153 18.7417 152.741 16.1548 142.751 14.1182C141.485 13.843 139.999 13.7329 138.76 13.4852C134.027 12.522 128.715 12.6046 123.844 12.6046C119.248 12.6046 115.753 13.1 111.542 13.4302C107.689 13.7605 98.3047 15.5768 94.782 16.9529C93.2959 17.5308 91.2318 17.9161 89.6631 18.5491L80.0033 22.3745C78.4071 22.9249 77.1411 23.8331 75.4899 24.6037C74.6918 24.989 74.0313 25.2917 73.2882 25.7045L66.9309 29.5299C60.0506 34.1535 53.941 38.832 48.2442 44.5564C42.5198 50.3358 37.7587 56.3904 33.3553 63.3807C32.5297 64.7292 31.7316 66.2704 30.8785 67.6189C29.2547 70.1508 27.4659 73.5634 26.2825 76.4531C25.5669 78.2144 24.934 79.5354 24.2734 81.2142C23.1176 84.0489 21.5764 88.2045 20.8609 91.2318C20.6132 92.3052 20.5031 92.9381 20.2279 93.9289C19.0445 98.3322 17.8611 103.121 17.4758 108.102C17.118 112.616 16.8153 116.358 16.8153 121.12Z"
        fill="white"
      />
    </svg>
  );
}

export default SvgComponent;
