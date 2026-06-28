// ─── Global Variables ─────────────────────────────────
let uploadedPhotoData = null;
const BASE_URL = 'http://localhost:8080/api/auth';

// ─── Time Slots ───────────────────────────────────────
const timeSlots = {
  "4-Weeks": [
    "4/06/25 - 28/06/25",
    "1/07/25 - 25/07/25",
    "5/08/25 - 29/08/25"
  ],
  "6-weeks": [
    "1/06/25 - 10/07/25",
    "15/07/25 - 25/08/25",
    "1/09/25 - 12/10/25"
  ]
};

// ─── Projects ─────────────────────────────────────────
const projects = {
  "4-Weeks": {
    "Mechanical Engineering": [
      { code: "M-1", title: "Compressor used in MEMU, its Periodic Overhauling & Testing" },
      { code: "M-2", title: "Electro–pneumatic unit used in MEMU, its Periodic Overhauling & Testing" },
      { code: "M-3", title: "Types of Brake Controller used in MEMU, its Overhauling & Testing" },
      { code: "M-4", title: "Project Report on Sakhu Coupler used in MEMU/EMU its maintenance & Testing" },
      { code: "M-5", title: "Project Report on Assembly of MEMU Motor Coach" },
      { code: "M-6", title: "Bogie used in DEMU, its Inspection & Maintenance" },
      { code: "M-7", title: "Bogie used in T-18, its Inspection & Maintenance" },
      { code: "M-8", title: "Project Report on Air Spring used DEMU with its Function & Overhauling" },
      { code: "M-9", title: "Project report on the IOH of ICF Bogie" },
      { code: "M-10", title: "Project Report on Periodic Overhauling of Bogie-Mounted Brake Cylinder" },
      { code: "M-11", title: "Introduction to MSU assembly and its fitment procedure" },
      { code: "M-12", title: "Project Report on Wheel Axle Assembly Process" },
      { code: "M-13", title: "Introduction to Roller Bearing, its Overhauling & Assembly Process" },
      { code: "M-14", title: "Type of Bogies used in Conventional Electric Locomotive and its Lowering" },
      { code: "M-15", title: "Various types of Pneumatic valve used in Conventional Electric Locomotive" },
      { code: "M-16", title: "Project Report on Body Structure Repair Process used in Conventional Electric Locomotive" },
      { code: "M-17", title: "Project Report on Welding and Cutting Processes used in Train Set Shop" }
    ],
    "Computer Science": [
      { code: "EC-1", title: "Microprocessor used in Electric Locomotives, its Periodic Overhauling & Testing" },
      { code: "EC-2", title: "Software for the Service Record of Employees" },
      { code: "EC-3", title: "Data Feeding of Salary of Employees" },
      { code: "EC-4", title: "Development of Face Identification software and its implementation" }
    ],
    "Information Technology": [
      { code: "EC-1", title: "Microprocessor used in Electric Locomotives, its Periodic Overhauling & Testing" },
      { code: "EC-2", title: "Software for the Service Record of Employees" },
      { code: "EC-3", title: "Data Feeding of Salary of Employees" },
      { code: "EC-4", title: "Development of Face Identification software and its implementation" }
    ],
    "Electrical Engineering": [
      { code: "E-1", title: "Types of Relay used in MEMU, its Overhauling and Testing" },
      { code: "E-2", title: "Motor Contactor used in MEMU/ EMU, its Overhauling and testing" },
      { code: "E-3", title: "Tap Changer used in MEMU/ EMU, its Overhauling and testing" },
      { code: "E-4", title: "Project Report on Inter Vehicular (I.V. Coupler) Coupler used in MEMU/ EMU" },
      { code: "E-5", title: "Project Report on Power Transmission System used in MEMU/ EMU" },
      { code: "E-6", title: "Project Report on Safe OHE Operation Procedure used in Railway" },
      { code: "E-7", title: "Project Report on Battery Charging, Discharging and Replacement in Electric Locomotive" },
      { code: "E-8", title: "Introduction to N-32 Tap Changer used in Conventional Electric Locomotive" },
      { code: "E-9", title: "Transformer used in Conventional Electric Locomotive, its POH & Testing" },
      { code: "E-10", title: "Types of Relay used in Electric Locomotive, its Overhauling & Testing" },
      { code: "E-11", title: "Traction Motor used in Conventional Electric Locomotive, its POH & Testing" },
      { code: "E-12", title: "3 Phase Induction Motor (Aux.) used in Conventional Electric Locomotive" },
      { code: "E-13", title: "Full Wave Bridge Rectifier used in Conventional Electric Locomotive" },
      { code: "E-14", title: "DJ Circuit Breaker used in Conventional Electric Locomotive, its POH & Testing" },
      { code: "E-15", title: "Project Report on BA Panel of Conventional Electric Locomotive" }
    ],
    "Electronics and Communication": [
      { code: "E-1", title: "Types of Relay used in MEMU, its Overhauling and Testing" },
      { code: "E-2", title: "Motor Contactor used in MEMU/ EMU, its Overhauling and testing" },
      { code: "E-3", title: "Tap Changer used in MEMU/ EMU, its Overhauling and testing" },
      { code: "E-4", title: "Project Report on Inter Vehicular (I.V. Coupler) Coupler used in MEMU/ EMU" },
      { code: "E-5", title: "Project Report on Power Transmission System used in MEMU/ EMU" },
      { code: "E-6", title: "Project Report on Safe OHE Operation Procedure used in Railway" },
      { code: "E-7", title: "Project Report on Battery Charging, Discharging and Replacement in Electric Locomotive" },
      { code: "E-8", title: "Introduction to N-32 Tap Changer used in Conventional Electric Locomotive" },
      { code: "E-9", title: "Transformer used in Conventional Electric Locomotive, its POH & Testing" },
      { code: "E-10", title: "Types of Relay used in Electric Locomotive, its Overhauling & Testing" }
    ]
  },
  "6-weeks": {
    "Mechanical Engineering": [
      { code: "M-18", title: "Electro–pneumatic unit and Compressor used in MEMU, their Periodic Overhauling & Testing" },
      { code: "M-19", title: "Electro–pneumatic unit and Types of Brake Controller used in MEMU" },
      { code: "M-20", title: "Project Report on Bogie used in DEMU and Assembly of MEMU Motor Coach" },
      { code: "M-21", title: "Project Report on the IOH of ICF Bogie and Periodic Overhauling of Bogie-Mounted Brake Cylinder" },
      { code: "M-22", title: "Project Report on MSU assembly, its fitment procedure, and Wheel Axle Assembly Process" },
      { code: "M-23", title: "Introduction to MSU assembly and Roller Bearing, its Overhauling & Assembly Process" }
    ],
    "Computer Science": [
      { code: "EC-5", title: "Software for the Service Record of Employees and Data Feeding of Salary of Employees" },
      { code: "EC-6", title: "Software development for data keeping of STC (Joining, feedback, training and Exam & Marks etc.)" }
    ],
    "Information Technology": [
      { code: "EC-5", title: "Software for the Service Record of Employees and Data Feeding of Salary of Employees" },
      { code: "EC-6", title: "Software development for data keeping of STC (Joining, feedback, training and Exam & Marks etc.)" }
    ],
    "Electrical Engineering": [
      { code: "E-16", title: "Types of Relays and Motor Contactor used in MEMU/ EMU, their Overhauling and Testing" },
      { code: "E-17", title: "Tap changer and Motor Contactor used in MEMU/ EMU, their Overhauling and Testing" },
      { code: "E-18", title: "Safe OHE Operation Procedure and Power Transmission System used in MEMU/ EMU" },
      { code: "E-19", title: "Transformer and N-32 Tap Changer used in Conventional Electric Locomotive" },
      { code: "E-20", title: "Study of railway signalling system and prepare a working model" },
      { code: "E-21", title: "Study of Coach fire alarm and safety system and prepare a working model" },
      { code: "E-22", title: "A project report on driverless train" },
      { code: "E-23", title: "Development of face identification software and its application in humanoid robot" }
    ],
    "Electronics and Communication": [
      { code: "E-16", title: "Types of Relays and Motor Contactor used in MEMU/ EMU, their Overhauling and Testing" },
      { code: "E-17", title: "Tap changer and Motor Contactor used in MEMU/ EMU, their Overhauling and Testing" },
      { code: "E-18", title: "Safe OHE Operation Procedure and Power Transmission System used in MEMU/ EMU" },
      { code: "E-20", title: "Study of railway signalling system and prepare a working model" },
      { code: "E-21", title: "Study of Coach fire alarm and safety system and prepare a working model" },
      { code: "E-22", title: "A project report on driverless train" },
      { code: "E-23", title: "Development of face identification software and its application in humanoid robot" }
    ],
    "Civil Engineering": [
      { code: "M-18", title: "Electro–pneumatic unit and Compressor used in MEMU, their Periodic Overhauling & Testing" },
      { code: "M-21", title: "Project Report on the IOH of ICF Bogie and Periodic Overhauling of Bogie-Mounted Brake Cylinder" },
      { code: "E-20", title: "Study of railway signalling system and prepare a working model" }
    ]
  }
};

// ─── Update Time Slots ────────────────────────────────
function updateTimeSlots() {
  const period = document.getElementById("period").value;
  const timeSlotSelect = document.getElementById("timeSlot");
  const timeSlotLabel = document.getElementById("timeSlotLabel");
  const projectListContainer = document.getElementById("projectListContainer");

  timeSlotSelect.innerHTML = '<option value="">-- Select Time Slot --</option>';

  if (period && timeSlots[period]) {
    timeSlotLabel.classList.remove("hidden");
    timeSlots[period].forEach(slot => {
      const option = document.createElement("option");
      option.value = slot;
      option.textContent = slot;
      timeSlotSelect.appendChild(option);
    });
  } else {
    timeSlotLabel.classList.add("hidden");
    projectListContainer.classList.add("hidden");
  }
}

// ─── Update Project List ──────────────────────────────
function updateProjectList() {
  const period = document.getElementById("period").value;
  const timeSlot = document.getElementById("timeSlot").value;
  const branch = document.getElementById("branch").value;
  const projectListContainer = document.getElementById("projectListContainer");
  const projectList = document.getElementById("projectList");

  if (period && timeSlot && branch && projects[period]?.[branch]) {
    projectListContainer.classList.remove("hidden");
    projectList.innerHTML = "";
    projects[period][branch].forEach(project => {
      const div = document.createElement("div");
      div.className = "project-item";
      div.innerHTML = `<span class="project-code">${project.code}:</span> ${project.title}`;
      projectList.appendChild(div);
    });
  } else {
    projectListContainer.classList.add("hidden");
  }
}

// ─── Navigation Helpers ───────────────────────────────
function hideAllPages() {
  document.querySelectorAll('.container').forEach(el => el.classList.add('hidden'));
}

function showLogin() {
  hideAllPages();
  document.getElementById("loginPage").classList.remove("hidden");
}

function showSignupForm() {
  hideAllPages();
  document.getElementById("signupForm").classList.remove("hidden");
}

function showAboutUs() {
  hideAllPages();
  document.getElementById("aboutUs").classList.remove("hidden");
}

// ─── Login ────────────────────────────────────────────
async function login() {
  const uniqueId = document.getElementById("loginUniqueId").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!uniqueId || !password) {
    alert("❌ Please enter both Unique ID and Password.");
    return;
  }

  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uniqueId, password })
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      fillAndShowIDCard(data.user);
      fillTrainingLetter(data.user);
    } else {
      alert("❌ " + data.message);
    }
  } catch (error) {
    console.error("Login error:", error);
    alert("❌ Login failed. Please check your connection.");
  }
}

// ─── Fill ID Card ─────────────────────────────────────
function fillAndShowIDCard(user) {
  hideAllPages();
  document.getElementById("idCard").classList.remove("hidden");

  document.getElementById("uniqueId").textContent = user.uniqueId || "-";
  document.getElementById("i_name").textContent = user.name || "-";
  document.getElementById("i_college").textContent = user.college || "-";
  document.getElementById("i_branch").textContent = user.branch || "-";
  document.getElementById("i_period").textContent = user.period || "-";

  if (user.photo) {
    const img = document.getElementById("displayedPhoto");
    img.src = user.photo;
    img.style.display = "block";
    document.getElementById("photoPlaceholder").style.display = "none";
  }
}

// ─── Fill Training Letter ─────────────────────────────
function fillTrainingLetter(user) {
  document.getElementById("trainingLetter").classList.remove("hidden");
  document.getElementById("letterCode").textContent = user.project?.split(" ")[0] || "E-XX";
  document.getElementById("letterDate").textContent = new Date().toLocaleDateString("en-GB");
  document.getElementById("projectTitle").textContent = user.project || "-";
  document.getElementById("letterUniqueId").textContent = user.uniqueId || "-";
  document.getElementById("letterName").textContent = user.name || "-";
  document.getElementById("letterCollege").textContent = user.college || "-";
  document.getElementById("letterBranch").textContent = user.branch || "-";
  document.getElementById("letterYear").textContent = user.year || "3rd";
  document.getElementById("letterCourse").textContent = user.course || "-";

  const slot = user.timeSlot || "07/07/25 - 16/08/25";
  const parts = slot.split(" - ");
  document.getElementById("trainingStart").textContent = parts[0] || "07/07/25";
  document.getElementById("trainingEnd").textContent = parts[1] || "16/08/25";
}

// ─── Photo Upload ─────────────────────────────────────
document.getElementById("photoUpload").addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (!file) return;

  if (file.size > 2 * 1024 * 1024) {
    alert("❌ File size should be less than 2MB.");
    this.value = '';
    return;
  }

  if (!file.type.startsWith('image/')) {
    alert("❌ Please upload a valid image file.");
    this.value = '';
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    uploadedPhotoData = e.target.result;
  };
  reader.readAsDataURL(file);
});

// ─── Signup Form Submit ───────────────────────────────
document.getElementById("applicationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const requiredFields = ['name', 'fatherName', 'address', 'course', 'college', 'branch', 'period', 'timeSlot', 'project', 'email', 'phone', 'signupPassword'];

  for (let field of requiredFields) {
    const el = document.getElementById(field);
    if (!el || !el.value.trim()) {
      alert(`❌ Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()} field.`);
      el?.focus();
      return;
    }
  }

  if (!document.getElementById("photoUpload").files[0]) {
    alert("❌ Please upload a photo for the ID card.");
    return;
  }

  // ✅ Show challan with ₹1 fee
  const fee = 1;
  window.currentFee = fee;

  hideAllPages();
  document.getElementById("challan").classList.remove("hidden");
  document.getElementById("c_name").textContent = document.getElementById("name").value;
  document.getElementById("c_college").textContent = document.getElementById("college").value;
  document.getElementById("c_period").textContent = document.getElementById("period").value;
  document.getElementById("c_timeSlot").textContent = document.getElementById("timeSlot").value;
  document.getElementById("c_amount").textContent = `₹${fee}`;
});

// ─── Razorpay Payment ─────────────────────────────────
async function startRazorpay() {
  const paymentMethod = document.getElementById("paymentMethod").value;
  if (!paymentMethod) {
    alert("❌ Please select a payment method.");
    return;
  }

  const name     = document.getElementById("name").value.trim();
  const fatherName = document.getElementById("fatherName").value.trim();
  const college  = document.getElementById("college").value.trim();
  const course   = document.getElementById("course").value;
  const branch   = document.getElementById("branch").value;
  const period   = document.getElementById("period").value;
  const timeSlot = document.getElementById("timeSlot").value;
  const project  = document.getElementById("project").value.trim();
  const email    = document.getElementById("email").value.trim();
  const phone    = document.getElementById("phone").value.trim();
  const password = document.getElementById("signupPassword").value;
  const fee      = window.currentFee || 1;

  const options = {
    key: "rzp_test_VSdp7X3K39GwBK",
    amount: fee * 100, // ₹1 = 100 paise
    currency: "INR",
    name: "Railway Internship Portal",
    description: `Internship Fee - ${period}`,

    // ✅ UPI ID configured
    config: {
      display: {
        blocks: {
          upi: {
            name: "Pay via UPI",
            instruments: [
              {
                method: "upi",
                vpa: "abhinandanm006@okhdfcbank" // ✅ your UPI ID
              }
            ]
          }
        },
        sequence: ["block.upi"],
        preferences: {
          show_default_blocks: true // also shows card, netbanking etc.
        }
      }
    },

    handler: async function (response) {
      try {
        const res = await fetch(`${BASE_URL}/signup`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name, fatherName, college, course, branch,
            period, timeSlot, project, email, phone, password,
            photo: uploadedPhotoData,
            paymentId: response.razorpay_payment_id
          })
        });

        const data = await res.json();
        if (data.success) {
          alert(`✅ Payment Successful!\nYour Unique ID: ${data.uniqueId}\nSave this for login.`);
          fillAndShowIDCard({
            uniqueId: data.uniqueId, name, college,
            branch, period, photo: uploadedPhotoData
          });
          fillTrainingLetter({
            uniqueId: data.uniqueId, name, college,
            branch, period, timeSlot, project, course
          });
        } else {
          alert("❌ Signup failed after payment. Contact support.\nPayment ID: " + response.razorpay_payment_id);
        }
      } catch (err) {
        alert("❌ Server error. Contact support.\nPayment ID: " + response.razorpay_payment_id);
        console.error(err);
      }
    },

    prefill: { name, email, contact: phone },
    theme: { color: "#0f4479" },
    modal: {
      ondismiss: function () {
        alert("Payment cancelled. You can try again.");
      }
    }
  };

  const rzp = new Razorpay(options);
  rzp.on('payment.failed', function (response) {
    alert("❌ Payment failed: " + response.error.description);
  });
  rzp.open();
}

// ─── Download ID Card ─────────────────────────────────
function downloadIDCard() {
  alert("🎉 ID Card download coming soon! Please take a screenshot for now.");
}

// ─── On Page Load ─────────────────────────────────────
window.onload = () => {
  const user = localStorage.getItem('user');
  if (user) {
    fillAndShowIDCard(JSON.parse(user));
  } else {
    showLogin();
  }
};