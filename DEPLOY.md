# Deploy guide (Render + Vercel)

This project has 3 apps. Deploy them separately.

| App | Host | Example URL |
|-----|------|-------------|
| Backend | [Render](https://render.com) | `https://food-del-api.onrender.com` |
| Frontend | [Vercel](https://vercel.com) | `https://food-del.vercel.app` |
| Admin | [Vercel](https://vercel.com) | `https://food-del-admin.vercel.app` |

---

## 0. Before deploy

1. Push the repo to GitHub (without `.env` files — they are gitignored).
2. In MongoDB Atlas → Network Access → allow `0.0.0.0/0` (or Render IPs).
3. Rotate your MongoDB password if it was ever committed in code.

Copy env templates locally if needed:

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
cp admin/.env.example admin/.env
```

---

## 1. Backend on Render

1. New → **Web Service** → connect your GitHub repo.
2. Settings:
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
3. Environment variables:

```
JWT_SECRET=your_strong_secret
STRIPE_SECRET_KEY=sk_live_or_test_key
MONGODB_URI=mongodb+srv://USER:PASSWORD@cluster.mongodb.net/food-del
FRONTEND_URL=https://YOUR-FRONTEND.vercel.app
```

4. Deploy and copy the service URL, e.g. `https://food-del-api.onrender.com`.

Check: open that URL in browser → should show `API Working`.

> Free Render services sleep after idle time. First request can take ~30–60s.

---

## 2. Frontend on Vercel

1. Import the same GitHub repo in Vercel.
2. Settings:
   - **Root Directory:** `frontend`
   - Framework: Vite
3. Environment variable:

```
VITE_API_URL=https://food-del-api.onrender.com
```

4. Deploy.

---

## 3. Admin on Vercel

1. Import the same repo again as a **second** Vercel project.
2. Settings:
   - **Root Directory:** `admin`
   - Framework: Vite
3. Environment variable:

```
VITE_API_URL=https://food-del-api.onrender.com
```

4. Deploy.

---

## 4. After URLs are ready

1. On Render, set `FRONTEND_URL` to your real frontend URL (needed for Stripe success/cancel redirects).
2. Redeploy backend if you changed env vars.
3. In Stripe Dashboard, use test mode first and confirm checkout redirects back to your frontend `/verify` page.

---

## Local development

```bash
# backend
cd backend && npm install && npm run server

# frontend
cd frontend && npm install && npm run dev

# admin
cd admin && npm install && npm run dev
```

Local `.env` values:

- Backend `FRONTEND_URL=http://localhost:5173`
- Frontend/Admin `VITE_API_URL=http://localhost:4000`

---

## Notes

- Uploaded food images are stored in `backend/uploads`. On free Render disks are ephemeral — files may disappear after redeploy. For production use S3/Cloudinary later.
- Never commit real secrets. Only commit `.env.example` files.
